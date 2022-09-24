import { IProductionPriceLiterMothRepository, PRODUCTION_PICE_LITER_MONTH_REPOSITORY } from "@/domain/gateways/production-price-liter-month-repository";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class ProductionPriceLiterMonthService implements IProductionPriceLiterMothRepository {
    constructor(
        @Adapter(PRODUCTION_PICE_LITER_MONTH_REPOSITORY) private readonly productionPriceLiterMothRepository: IProductionPriceLiterMothRepository,
    ) { }

    async ProductionPriceLiterMonth(data: IProductionPriceLiterMothRepository.Params): Promise<IProductionPriceLiterMothRepository.Result | any> {
        const productionRepository = await this.productionPriceLiterMothRepository.ProductionPriceLiterMonth(data)
        return productionRepository

    }
}