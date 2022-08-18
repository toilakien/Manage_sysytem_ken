import { UserProfile } from "../login";

export interface JWTDataProps {
  userId: string;
}   

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: (account: string, password: string, remember_me: boolean) => Promise<void>;
};

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
}
export const actionType={
    LOGIN:'LOGIN',
    LOGOUT:'LOGOUT'
}
export interface AccountReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}