import { taxBaseParams } from "@/domain/entities/taxbase";

export const ADD_TAXBASE_SERVICE = "ADD_TAXBASE_SERVICE";

export interface IAddTaxBaseService {
    addTaxBaseService: (data: taxBaseParams) => Promise<IAddTaxBaseService.Result | IAddTaxBaseService.Exist>
}

export namespace IAddTaxBaseService {
    export type Exist = boolean;
    export type Result = {
        id?: string | number | object;
        semester: number;
        baseprice: number;
        kmPattern: number;
        kmUp: number;
        bonusProduction: number;
    }
}