import { ITaxBaseRepository, TAXBASE_REPOSITORY } from "@/domain/gateways/taxbase-repository";
import { ITaxBaseService } from "./Ifactory/Itaxbase";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class TaxBaseService implements ITaxBaseService {
    constructor(
        @Adapter(TAXBASE_REPOSITORY)
        private taxBaseRepository: ITaxBaseRepository,
    ) { }

    async addTaxBaseService(data: ITaxBaseService.Params): Promise<ITaxBaseService.Result | ITaxBaseService.Exist | any> {
        return await this.taxBaseRepository.addTaxBaseRepository(data[0]);
    }

    async getTaxBaseService(semester: ITaxBaseService.Params): Promise<ITaxBaseService.Result | ITaxBaseService.Exist | any> {
        return await this.taxBaseRepository.getTaxBaseRepository(semester.semester)
    }
}