import {  AccountReducerActionProps, actionType, InitialLoginContextProps } from "src/types/overRides/auth";

const initalState: InitialLoginContextProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
  };
  const accountReducer = (state = initalState, action: AccountReducerActionProps) => {
    switch (action.type) {
      case actionType.LOGIN: {
        const { user } = action.payload!;
        return {
          ...state,
          isLoggedIn: true,
          isInitialized: true,
          user
        };
      }
      case actionType.LOGOUT: {
        return {
          ...state,
          isInitialized: true,
          isLoggedIn: false,
          user: null
        };
      }
      default: {
        return { ...state };
      }
    }
  };
  export default accountReducer;