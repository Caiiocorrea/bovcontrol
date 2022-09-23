import { IProductionVolumeDayRepository, PRODUCTION_VOLUME_DAY_REPOSITORY } from "@/domain/gateways/production-volume-day-repository";
import { IProductionVolumeDayService } from "./dto/production-volume-day-dto";
import { ConvertCoin } from "@/infrastructure/helpers/convert-coin";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class ProductionVolumeDayService implements IProductionVolumeDayService {
    constructor(
        @Adapter(PRODUCTION_VOLUME_DAY_REPOSITORY) private readonly productionRepository: IProductionVolumeDayRepository,
    ) { }


    async ProductionVolumeDay(data: IProductionVolumeDayService.Params): Promise<IProductionVolumeDayService.Result | any> {
        const ProductionVolumeDay = await this.productionRepository.ProductionVolumeDay(data)
        // console.log({ ProductionVolumeDay })
        // ProductionVolumeDay.price_BR = ConvertCoin.convertCoinBR(ProductionVolumeDay.price)
        // ProductionVolumeDay.price_US = ConvertCoin.convertCoinUS(ProductionVolumeDay.price)
        // ProductionVolumeDay.price_BR = ProductionVolumeDay[0].forEach(element => ConvertCoin.convertCoinBR(element.price))
        // ProductionVolumeDay.price_US = await this.productionRepository.ProductionVolumeDayRepository(data).map((dados) => ConvertCoin.convertCoinUS(dados.price))
        console.log('ProductionVolumeDay >>>>>>', ProductionVolumeDay)

        // ProductionVolumeDay.price_BR = ConvertCoin.convertCoinBR(data.price)
        // ProductionVolumeDay.price_US = ConvertCoin.convertCoinUS(data.price)
        // console.log(ProductionVolumeDay[0].map((dados) => ConvertCoin.convertCoinBR(data.price)))

        // ProductionVolumeDay[0].map((dados) => {
        //     console.log({
        //         price_BR: ConvertCoin.convertCoinBR(data.price),
        //         price_US: ConvertCoin.convertCoinUS(data.price)
        //     })
        // })


        return ProductionVolumeDay

    }
}