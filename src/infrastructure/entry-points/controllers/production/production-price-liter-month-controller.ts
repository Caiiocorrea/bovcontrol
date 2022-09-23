import { IPriceLiterMothServiceService, PRODUCTION_PRICE_LITER_MONTH_SERVICE } from "@/domain/use-cases/production/dto/production-price-liter-month-dto";
import { Adapter, Get, Mapping, Query } from "@tsclean/core";

@Mapping('api/v1/productions/pricelitermonth')
export class ProductionPriceLiterMothController {

    constructor(
        @Adapter(PRODUCTION_PRICE_LITER_MONTH_SERVICE) private readonly productionPriceLiterMothRepository: IPriceLiterMothServiceService,
    ) { }

    @Get()
    async ProductionPriceLiterMonth(@Query() data: IPriceLiterMothServiceService.Params): Promise<IPriceLiterMothServiceService.Result | any> {
        data = await this.productionPriceLiterMothRepository.ProductionPriceLiterMonth(data)
        console.log(data)
        return { statusCode: 201, body: { message: 'Production successfully registered.', data } }
    }
}
