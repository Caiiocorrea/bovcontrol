import { ILoadAccountTokenRepository } from "@/domain/gateways/load-account-token-repository";
import { UserModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/user";
import { IUserRepository } from "@/domain/gateways/user-repository";
import { AddUserParams, UserModel } from "@/domain/entities/user";
import mongoose from "mongoose";

export class UserMongooseRepositoryAdapter implements IUserRepository {

    map(data: any): any {
        const { _id, firstName, lastName, email, password, roles } = data
        return Object.assign({}, { id: _id.toString(), firstName, lastName, email, password }, roles)
    }


    async getUsersRepository(): Promise<UserModel[]> {
        return UserModelSchema.find().select("-password");
    }

    async checkEmail(email: string): Promise<IUserRepository.Result> {
        const user = await UserModelSchema.findOne({ email }).exec();
        return user && this.map(user);
    }

    async updateToken(id: string | number, token: string): Promise<void> {
        await UserModelSchema.updateOne({
            _id: id
        }, {
            $set: {
                accessToken: token
            }
        }, {
            upsert: true
        }
        );
    }

    async loadToken(token: string): Promise<ILoadAccountTokenRepository.Result> {
        console.log("adapter", token)
        let objectFilter: {}
        objectFilter["_id"] = new mongoose.mongo.ObjectId(token)
        console.log(objectFilter)
        const result = await UserModelSchema.findOne(objectFilter);
        return this.map(result);
    }

    async addUserRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }
}
