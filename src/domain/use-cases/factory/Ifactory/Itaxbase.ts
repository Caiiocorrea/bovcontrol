export const TAXBASE_SERVICE = "TAXBASE_SERVICE";

export interface ITaxBaseService {
    addTaxBaseService: (data: ITaxBaseService.Params) => Promise<ITaxBaseService.Result | ITaxBaseService.Exist>
    getTaxBaseService: (data: ITaxBaseService.Params) => Promise<ITaxBaseService.Result | ITaxBaseService.Exist>
}

export namespace ITaxBaseService {
    export type Exist = boolean;

    export type Result = {
        id?: string | number | object;
        semester: number;
        baseprice: number;
        kmPattern: number;
        kmUp: number;
        bonusProduction: number;
    }

    export type Params = {
        id?: string | number | object;
        semester?: number;
        baseprice?: number;
        kmPattern?: number;
        kmUp?: number;
        bonusProduction?: number;
    }
}