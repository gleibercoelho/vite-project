export interface IUserInfo{
    name: string;
    imageUser: string | undefined;
    emailUser: string;
}

export interface IUserReducer {
    userReduce: IUserInfo
}