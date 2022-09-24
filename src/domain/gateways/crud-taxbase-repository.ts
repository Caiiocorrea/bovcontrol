export const TAXBASE_REPOSITORY = "TAXBASE_REPOSITORY";

export interface ITaxBaseRepository {
    addTaxBaseRepository: (data: ITaxBaseRepository.Params) => Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist>
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