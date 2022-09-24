import { IProductionVolumeDayRepository, PRODUCTION_VOLUME_DAY_REPOSITORY } from "@/domain/gateways/production-volume-day-repository";
import { IProductionVolumeDayService } from "./Ifactory/Iproduction-volume-day";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class ProductionVolumeDayService implements IProductionVolumeDayService {
    constructor(
        @Adapter(PRODUCTION_VOLUME_DAY_REPOSITORY) private readonly productionRepository: IProductionVolumeDayRepository,
    ) { }


    async ProductionVolumeDay(data: IProductionVolumeDayService.Params): Promise<IProductionVolumeDayService.Result | any> {
        return await this.productionRepository.ProductionVolumeDay(data)
    }
}