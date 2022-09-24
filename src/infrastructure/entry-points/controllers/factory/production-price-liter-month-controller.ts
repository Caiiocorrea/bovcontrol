import { IPriceLiterMothServiceService, PRODUCTION_PRICE_LITER_MONTH_SERVICE } from "@/domain/use-cases/factory/Ifactory/Iproduction-price-liter-month";
import { Adapter, Get, Mapping, Query } from "@tsclean/core";

@Mapping('api/v1/productions/pricelitermonth')
export class ProductionPriceLiterMothController {

    constructor(
        @Adapter(PRODUCTION_PRICE_LITER_MONTH_SERVICE) private readonly productionPriceLiterMothRepository: IPriceLiterMothServiceService,
    ) { }

    @Get()
    async ProductionPriceLiterMonth(@Query() data: IPriceLiterMothServiceService.Params): Promise<IPriceLiterMothServiceService.Result | any> {
        data = await this.productionPriceLiterMothRepository.ProductionPriceLiterMonth(data)
        return { statusCode: 201, body: { message: 'Production successfully registered.', data } }
    }
}
