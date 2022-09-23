import { IProductionPriceLiterMothRepository, PRODUCTION_PICE_LITER_MONTH_REPOSITORY } from "@/domain/gateways/production-price-liter-month-repository";
import { ConvertCoin } from "@/infrastructure/helpers/convert-coin";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class ProductionPriceLiterMonthService implements IProductionPriceLiterMothRepository {
    constructor(
        @Adapter(PRODUCTION_PICE_LITER_MONTH_REPOSITORY) private readonly productionPriceLiterMothRepository: IProductionPriceLiterMothRepository,
    ) { }

    async ProductionPriceLiterMonth(data: IProductionPriceLiterMothRepository.Params): Promise<IProductionPriceLiterMothRepository.Result | any> {
        const productionRepository = await this.productionPriceLiterMothRepository.ProductionPriceLiterMonth(data)
        // productionRepository['price_BR'] = ConvertCoin.convertCoinBRL(productionRepository['price'])
        // productionRepository['price_BR'] = ConvertCoin.convertCoinBR(productionRepository['price'])
        return productionRepository

    }
}