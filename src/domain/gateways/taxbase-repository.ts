import { taxBaseParams } from "../entities/taxbase";

export const TAXBASE_REPOSITORY = "TAXBASE_REPOSITORY";

export interface ITaxBaseRepository {
    // updateTaxBaseRepository: (id: string, data: taxBaseParams) => Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist>
    addTaxBaseRepository: (data: taxBaseParams) => Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist>
    // loadTaxBaseRepository: () => Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist>,
    getTaxBaseRepository: (semester: number) => Promise<number>,
}

export namespace ITaxBaseRepository {
    export type Exist = boolean;

    export type Result = {
        id?: string | number | object;
        baseprice: number;
        kmPattern: number;
        semester?: number;
        kmUp: number;
        bonusProduction: number;
    }

    export type Params = {
        baseprice?: number;
        kmPattern?: number;
        kmUp?: number;
        bonusProduction?: number;
    }

}