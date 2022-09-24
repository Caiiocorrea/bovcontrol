export const PRODUCTION_SERVICE = "PRODUCTION_SERVICE";

export interface IProductionService {
    addProductionService: (data: IProductionService.Params) => Promise<IProductionService.Result | IProductionService.Exist>
    getProductionService: (id: string) => Promise<IProductionService.Result | IProductionService.Exist>
}

export namespace IProductionService {
    export type Exist = boolean;

    export type Result = {
        id?: object;
        farm: string | number | object;
        farmer: string | number | object;
        liter: number;
        price: number;
        kmPattern: number;
        kmUp: number;
        bonusProduction: number;
        dateregister: Date;
    }

    export type Params = {
        id?: string | number | object;
        farm: string | number | object;
        farmer: string | number | object;
        liter: number;
        price?: number;
        km: number;
    }
}