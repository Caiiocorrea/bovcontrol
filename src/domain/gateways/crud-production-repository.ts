import { FarmerParams } from "../entities/farmer";
import { FarmParams } from "../entities/farm";

export const PRODUCTION_REPOSITORY = "PRODUCTION_REPOSITORY"

export interface IProductionRepository {
    getProductionRepository: (id: string) => Promise<IProductionRepository.Result | IProductionRepository.Exist>
    addProductionRepository: (data: IProductionRepository.Params) => Promise<IProductionRepository.Result | IProductionRepository.Exist>
}

export namespace IProductionRepository {
    export type Exist = boolean;

    export type Result = {
        id?: string | number | object;
        farm: FarmParams[]
        farmer: FarmerParams[]
        liter: number;
        semester?: string;
        verifySemester?: number;
        price: number;
        kmPattern?: number;
        kmUp?: number;
        bonusProduction?: number;
        price_BR: number;
        price_US: number
    }

    export type Params = {
        id?: string;
        farm?: string | number | object;
        farmer?: string | number | object;
        liter?: number;
        price?: number;
        averagemonthprice?: any | string | number | object;
        averagemonthliter?: any | string | number | object;
        price_BRL?: any | string | number | object;
        price_USD?: any | string | number | object;
        day?: any | string | number | object;
        month?: any | string | number | object;
        year?: any | string | number | object;
    }

}