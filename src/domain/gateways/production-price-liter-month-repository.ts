import { FarmerParams } from "../entities/farmer";
import { FarmParams } from "../entities/farm";

export const PRODUCTION_PICE_LITER_MONTH_REPOSITORY = "PRODUCTION_PICE_LITER_MONTH_REPOSITORY"

export interface IProductionPriceLiterMothRepository {
    ProductionPriceLiterMonth: (data: IProductionPriceLiterMothRepository.Params) => Promise<IProductionPriceLiterMothRepository.Result | IProductionPriceLiterMothRepository.Exist>
}

export namespace IProductionPriceLiterMothRepository {
    export type Exist = boolean;

    export type Result = {
        id?: string | number | object;
        farm: FarmParams[]
        farmer: FarmerParams[]
        liter: number;
        semester?: string;
        verifySemester?: number;
        price?: number;
        kmPattern?: number;
        kmUp?: number;
        bonusProduction?: number;
        price_BRL?: string;
        price_USD?: string
    }

    export type Params = {
        farmer: string;
        dateregister?: string;
    }

}