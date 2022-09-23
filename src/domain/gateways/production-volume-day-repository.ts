import { FarmParams } from "../entities/farm";

export const PRODUCTION_VOLUME_DAY_REPOSITORY = "PRODUCTION_VOLUME_DAY_REPOSITORY"

export interface IProductionVolumeDayRepository {
    ProductionVolumeDay: (data: IProductionVolumeDayRepository.Params) => Promise<IProductionVolumeDayRepository.Result | any>
}

export namespace IProductionVolumeDayRepository {
    export type Result = {
        id?: string | number | object;
        farm?: FarmParams[]
        farmer?: string
        liter?: number;
        price: number;
        kmUp?: number;
        year: number,
        day: number,
        month: number,
        kmPattern?: number;
        price_BRL?: string;
        price_USD?: string;
        semester?: string;
        verifySemester?: number;
        bonusProduction?: number;
        averagemonthprice: string;
        averagemonthliter: string
    }

    export type Params = {
        farmer: string
        liter?: number;
        price?: number;
        dateregister?: string;
    }

}