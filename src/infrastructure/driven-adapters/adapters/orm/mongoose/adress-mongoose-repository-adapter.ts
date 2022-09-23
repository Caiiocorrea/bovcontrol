import { IAdressRepository } from "@/domain/gateways/adress-repository";
import { AdressParams } from "@/domain/entities/adress";
import { AdressModelSchema } from "./models/adress";
import mongoose from "mongoose";


export class AdressMongooseRepositoryAdapter implements IAdressRepository {

    async addAdressRepository(data: AdressParams): Promise<IAdressRepository.Result | IAdressRepository.Exist | any> {
        return await AdressModelSchema.create(data);
    }

    async getzipCodeRepository(zipcode: string): Promise<IAdressRepository.Result | IAdressRepository.Exist | any> {
        return await AdressModelSchema.findOne({ zipcode })
    }

    async updateAdressRepository(id: string, data: AdressParams): Promise<IAdressRepository.Result | IAdressRepository.Exist | any> {
        return await AdressModelSchema.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, data, { new: true })
    }
}