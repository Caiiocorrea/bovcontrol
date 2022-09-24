import { IProductionRepository, PRODUCTION_REPOSITORY } from "@/domain/gateways/production-repository";
import { CALCULATE_PRICE_SERVICE, ICalculatePriceService } from "./Ifactory/Icalculateprice-production";
import { IProductionService } from "./Ifactory/Iadd-production";
import { VerifySemester } from "@/infrastructure/helpers/semester";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class AddProductionService implements IProductionService {
    constructor(
        @Adapter(PRODUCTION_REPOSITORY) private readonly productionRepository: IProductionRepository,
        @Adapter(CALCULATE_PRICE_SERVICE) private readonly calculateprice: ICalculatePriceService,
    ) { }


    async addProductionService(data: IProductionService.Params): Promise<IProductionService.Result | IProductionService.Exist | any> {
        data.price = await this.calculateprice.calculate(VerifySemester.semesterVerify(), data.liter)
        return await this.productionRepository.addProductionRepository(data)
    }

    async getProductionService(data: IProductionService.Params): Promise<IProductionService.Result | IProductionService.Exist | any> {
        data.price = await this.calculateprice.calculate(VerifySemester.semesterVerify(), data.liter)
        return await this.productionRepository.addProductionRepository(data)
    }
}