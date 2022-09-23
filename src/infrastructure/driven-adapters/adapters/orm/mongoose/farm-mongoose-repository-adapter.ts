import { IFarmRepository } from "@/domain/gateways/farm-repository";
import { FarmParams } from "@/domain/entities/farm";
import { FarmModelSchema } from "./models/farm";
import mongoose from "mongoose";


export class FarmMongooseRepositoryAdapter implements IFarmRepository {

    async loadFarmsRepository(): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        return await FarmModelSchema.find().populate({ path: 'adressId' });
    }

    async getFarmRepository(cnpj: string): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        return await FarmModelSchema.findOne({ cnpj })

    }

    async updateFarmRepository(id: string, data: FarmParams): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        return await FarmModelSchema.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, data, { new: true })
    }

    async addFarmRepository(data: FarmParams): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        return await FarmModelSchema.create(data);
    }

}