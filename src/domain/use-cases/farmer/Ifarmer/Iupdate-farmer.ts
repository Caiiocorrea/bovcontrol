import { FarmerParams } from "@/domain/entities/farmer";

export const UPDATE_FARMER_SERVICE = "UPDATE_FARMER_SERVICE";

export interface IUpdateFarmerService {
    updateFarmerService: (id: string, data: FarmerParams) => Promise<IUpdateFarmerService.Result | IUpdateFarmerService.Exist>
}

export namespace IUpdateFarmerService {
    export type Exist = boolean;
    export type Result = {
        id?: string | number
    }
}