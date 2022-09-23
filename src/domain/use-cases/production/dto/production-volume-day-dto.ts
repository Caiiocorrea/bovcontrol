export const PRODUCTION__VOLUME_DAY_SERVICE = "PRODUCTION__VOLUME_DAY_SERVICE";

export interface IProductionVolumeDayService {
    ProductionVolumeDay: (data: IProductionVolumeDayService.Params) => Promise<IProductionVolumeDayService.Result | any>
}

export namespace IProductionVolumeDayService {
    export type Result = {
        id?: string | number | object;
        farm: string | number | object;
        farmer: string | number | object;
        liter?: number;
        price?: number;
        kmPattern?: number;
        kmUp?: number;
        bonusProduction?: number;
        dateregister?: Date;
    }

    export type Params = {
        farm: string;
        farmer: string;
        liter: number;
        price?: number;
    }
}