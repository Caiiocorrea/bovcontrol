import { AddUserParams, UserModel } from "../entities/user";

export const USER_REPOSITORY = "USER_REPOSITORY";

export interface IUserRepository {
    checkEmail: (email: string) => Promise<IUserRepository.Result>
    addUserRepository: (data: AddUserParams) => Promise<UserModel>
    getUsersRepository: () => Promise<UserModel[]>
}

export namespace IUserRepository {
    export type Result = {
        id: string | number;
        firstName: string;
        password: string;
        roles: [];
    }
    export type Exist = boolean;
}