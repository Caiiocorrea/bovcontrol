export const CALCULATE_PRICE_SERVICE = "CALCULATE_PRICE_SERVICE";

export interface ICalculatePriceService {
    calculate: (semester: number, liter: number) => Promise<ICalculatePriceService.Result>,
    pricePattern?: (semester: number, liter: number) => Promise<ICalculatePriceService.Result>
    priceMax?: (semester: number, liter: number) => Promise<ICalculatePriceService.Result>
}

export namespace ICalculatePriceService {
    export type Result = number

    export type Params = {
        semester: number;
        liter: number;
    }
}