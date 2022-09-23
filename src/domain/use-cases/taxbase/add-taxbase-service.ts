import { IAddTaxBaseService } from "./dto/add-taxbase-dto";
import { ITaxBaseRepository, TAXBASE_REPOSITORY } from "@/domain/gateways/taxbase-repository";
import { taxBaseParams } from "@/domain/entities/taxbase";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class AddTaxBaseService implements IAddTaxBaseService {
    constructor(
        @Adapter(TAXBASE_REPOSITORY)
        private addTaxBaseRepository: ITaxBaseRepository,
    ) { }

    async addTaxBaseService(data: taxBaseParams): Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist | any> {
        return await this.addTaxBaseRepository.addTaxBaseRepository(data);
    }
}