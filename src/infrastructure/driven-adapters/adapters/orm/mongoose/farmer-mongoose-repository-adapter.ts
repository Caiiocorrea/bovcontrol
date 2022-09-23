import { IFarmerRepository } from "@/domain/gateways/farmer-repository";
import { FarmerParams } from "@/domain/entities/farmer";
import { FarmerModelSchema } from "./models/farmer";
import mongoose from "mongoose";

export class FarmerMongooseRepositoryAdapter implements IFarmerRepository {


    async loadFarmersRepository(): Promise<IFarmerRepository.Result | IFarmerRepository.Exist | any> {
        return FarmerModelSchema.find().populate({ path: 'adressId' });
    }

    async getFarmersRepository(cpfcnpj: string): Promise<IFarmerRepository.Result | IFarmerRepository.Exist | any> {
        return await FarmerModelSchema.findOne({ cpfcnpj })

    }

    async updateFarmerRepository(id: string, data: FarmerParams): Promise<IFarmerRepository.Result | IFarmerRepository.Exist | any> {
        return await FarmerModelSchema.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, data, { new: true })
    }

    async addFarmerRepository(data: FarmerParams): Promise<IFarmerRepository.Result | IFarmerRepository.Exist | any> {
        return await FarmerModelSchema.create(data);
    }
}
