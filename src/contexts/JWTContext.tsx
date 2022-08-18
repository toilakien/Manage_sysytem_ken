import React, { createContext, useReducer } from 'react';
import {
  actionType,
  InitialLoginContextProps,
  JWTContextType
} from 'src/types/overRides/auth';
import axios from 'src/utils/axios';
import jwtDecode from 'jwt-decode';
import accountReducer from 'src/store/slice/accountReducer';
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
  const [state, dispatch] = useReducer(accountReducer,initalState);
  console.log(state);
  
  const login = async (
    account: string,
    password: string,
    remember_me: boolean
  ) => {
    try {
      const resp = await axios.post(`${URL_LOGIN}`, {
        account,
        password,
        remember_me
      });
      if (resp) {
        const { token, user } = resp.data.success;
        console.log(token);

        setSession(token);
        setUser(user);
        dispatch({
          type: actionType.LOGIN,
          payload: {
            isLoggedIn: true,
            user
          }
        });
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {};
  return (
    <JWTContext.Provider value={{...state, login, logout }}>
      {children}
    </JWTContext.Provider>
  );
};
export default JWTContext;
