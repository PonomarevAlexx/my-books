export interface State {
    user: IUser | null;
    isAuth: boolean;
    status: string;
    error: string;
}

export interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
