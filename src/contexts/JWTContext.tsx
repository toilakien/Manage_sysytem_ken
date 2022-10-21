import React, { createContext, useReducer } from 'react';
import {
  actionType,
  InitialLoginContextProps,
  JWTContextType
} from 'src/types/overRides/auth';
import axios from 'src/utils/axios';
import jwtDecode from 'jwt-decode';
import accountReducer from 'src/store/slice/accountReducer';
import { snackbarList } from 'src/store/slice/snackbar';
const URL_LOGIN = `${process.env.REACT_APP_API_URL}/v1/login`;

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: any = jwtDecode(serviceToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken?: string | null) => {
  if (serviceToken && verifyToken(serviceToken)) {
    localStorage.setItem('serviceToken', JSON.stringify(serviceToken));
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const setUser = (user?: any | null) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
    delete axios.defaults.headers.common.Authorization;
  }
};
const JWTContext = createContext<JWTContextType | null>(null);

const initalState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(accountReducer, initalState);

  const login = async (
    username: string,
    password: string,
    remember_me: boolean
  ) => {
    const response = await axios.post(URL_LOGIN, {
      username,
      password,
      remember_me
    });
    console.log(response);

    const { token } = response.data.data;
    console.log(token);

    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        isLoggedIn: true,
      }
    });
  };

  const logout = () => {
    setSession(null);
    setUser(null);
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <JWTContext.Provider value={{ ...state, login, logout }}>
      {children}
    </JWTContext.Provider>
  );
};
export default JWTContext;
