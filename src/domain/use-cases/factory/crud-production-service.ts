import { IProductionRepository, PRODUCTION_REPOSITORY } from "@/domain/gateways/crud-production-repository";
import { CALCULATE_PRICE_SERVICE, ICalculatePriceService } from "./Ifactory/Icalculateprice-production";
import { IProductionService } from "./Ifactory/Icrud-production";
import { VerifySemester } from "@/infrastructure/helpers/semester";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class ProductionService {
    constructor(
        @Adapter(PRODUCTION_REPOSITORY) private readonly productionRepository: IProductionRepository,
        @Adapter(CALCULATE_PRICE_SERVICE) private readonly calculateprice: ICalculatePriceService,
    ) { }


    async addProductionService(data: IProductionService.Params): Promise<IProductionService.Result | IProductionService.Exist | any> {
        data.price = await this.calculateprice.calculate(VerifySemester.semesterVerify(), data.liter)
        return await this.productionRepository.addProductionRepository(data[0])
    }

    async getProductionService(id: string): Promise<IProductionService.Result | IProductionService.Exist | any> {
        return await this.productionRepository.getProductionRepository(id)
    }
}