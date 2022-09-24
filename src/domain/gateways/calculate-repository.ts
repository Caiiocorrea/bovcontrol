import { FarmerParams } from "../entities/farmer";
import { FarmParams } from "../entities/farm";

export const CALCULATE_PRICE_REPOSITORY = "CALCULATE_PRICE_REPOSITORY";

export interface ICalculateRepository {
    calculate?: (semester: number, liter: number) => Promise<ICalculateRepository.Result>
    pricePattern?: (semester: number, liter: number) => Promise<ICalculateRepository.Result>
    priceMax?: (semester: number, liter: number) => Promise<ICalculateRepository.Result>
}

export namespace ICalculateRepository {
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
    }
    export type Params = {
        semester: number;
        liter: number;
        taxbase: number;
        volumemouth: [];
    }
}