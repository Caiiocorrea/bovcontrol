import { ITaxBaseRepository } from "@/domain/gateways/taxbase-repository";
import { TaxBaseModelSchema } from "./models/taxbase";


export class TaxBaseMongooseRepositoryAdapter implements ITaxBaseRepository {

    async getTaxBaseRepository(semester: number): Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist | any> {
        return await TaxBaseModelSchema.findOne({ semester })
    }

    async addTaxBaseRepository(data: any): Promise<any> {
        return await TaxBaseModelSchema.create(data);
    }
}