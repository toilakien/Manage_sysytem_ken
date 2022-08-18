export type UserProfile = {
    id?: string;
    name?: string;
    username?: string;
    password?: string;
    password_confirmation?: string;
    email?: string;
    dob?: string;
    phone?: string;
    gender?: string;
    type?: number;
    status?: number;
    created_at?: Date;
    updated_at?: Date;
    profile_img?: string;
  };
export interface Payload{
    token:string,
    user:UserProfile[],
}
export interface LoginType{
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfile | null | undefined;
}