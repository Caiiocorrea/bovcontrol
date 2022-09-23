import { IProductionService, ADD_PRODUCTION_SERVICE } from "@/domain/use-cases/production/dto/add-production-service.dto";
import { Adapter, Body, Mapping, Post } from "@tsclean/core";

@Mapping('api/v1/productions')
export class AddProductionController {

    constructor(
        @Adapter(ADD_PRODUCTION_SERVICE) private readonly productionService: IProductionService,
    ) { }

    @Post()
    async addProductionController(@Body() data: IProductionService.Params): Promise<IProductionService.Result | IProductionService.Exist | any> {
        const addproduction = await this.productionService.addProductionService(data);
        return { statusCode: 201, body: { message: 'Production successfully registered.', addproduction } }
    }
}
