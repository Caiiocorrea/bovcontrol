import { IProductionService, PRODUCTION_SERVICE } from "@/domain/use-cases/factory/Ifactory/Icrud-production";
import { Adapter, Body, Get, HttpException, Mapping, Param, Post } from "@tsclean/core";

@Mapping('api/v1/productions')
export class ProductionController {

    constructor(
        @Adapter(PRODUCTION_SERVICE) private readonly productionService: IProductionService,
    ) { }

    @Post()
    async addProductionController(@Body() data: IProductionService.Params): Promise<IProductionService.Result | IProductionService.Exist | any> {
        await this.productionService.addProductionService(data);
        return { message: 'Production successfully registered.', body: await this.productionService.addProductionService(data) }
    }

    @Get('/:id')
    async getProductionController(@Param() id: string): Promise<IProductionService.Result | IProductionService.Exist | any> {
        const productionExist = await this.productionService.getProductionService(id)
        if (!productionExist[0]) throw new HttpException('Production does not exist', 400)
        throw new HttpException({ body: await this.productionService.getProductionService(id) }, 400)
    }
}
