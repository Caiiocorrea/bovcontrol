import { IProductionVolumeDayService, PRODUCTION__VOLUME_DAY_SERVICE } from "@/domain/use-cases/factory/Ifactory/Iproduction-volume-day";
import { Adapter, Get, Mapping, Query } from "@tsclean/core";

@Mapping('api/v1/productions/volumeday')
export class ProductionVolumeDayController {

    constructor(
        @Adapter(PRODUCTION__VOLUME_DAY_SERVICE) private readonly ProductionVolumeDayService: IProductionVolumeDayService,
    ) { }

    @Get()
    async ProductionVolumeDay(@Query() data: IProductionVolumeDayService.Params): Promise<IProductionVolumeDayService.Result | any> {
        return { statusCode: 201, body: { message: 'Production successfully registered.', data: await this.ProductionVolumeDayService.ProductionVolumeDay(data) } }
    }
}
