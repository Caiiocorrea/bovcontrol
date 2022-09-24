export const PRODUCTION_PRICE_LITER_MONTH_SERVICE = "PRODUCTION_PRICE_LITER_MONTH_SERVICE";

export interface IPriceLiterMothServiceService {
    ProductionPriceLiterMonth: (data: IPriceLiterMothServiceService.Params) => Promise<IPriceLiterMothServiceService.Result>
}

export namespace IPriceLiterMothServiceService {
    export type Result = {
        id?: string | number | object;
        farm: string | number | object;
        farmer: string | number | object;
        liter: number;
        price?: number;
        price_BR: number;
        price_US: number;
        dateregister: Date;
    }

    export type Params = {
        farmer: string | number | object;
        price?: number;
        dateregister: Date;
    }
}