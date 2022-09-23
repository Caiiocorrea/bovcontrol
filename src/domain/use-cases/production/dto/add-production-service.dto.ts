export const ADD_PRODUCTION_SERVICE = "ADD_PRODUCTION_SERVICE";

export interface IProductionService {
    addProductionService: (data: any) => Promise<IProductionService.Result | IProductionService.Exist>
}

export namespace IProductionService {
    export type Exist = boolean;

    export type Result = {
        id?: object;
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
        id?: string;
        farm: string | number | object;
        farmer: string | number | object;
        liter: number;
        price?: number;
        dateregister?: Date;
    }
}