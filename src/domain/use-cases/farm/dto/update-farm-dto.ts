import { FarmParams } from "@/domain/entities/farm";

export const UPDATE_FARM_SERVICE = "UPDATE_FARM_SERVICE";

export interface IUpdateFarmService {
    updateFarmService: (id: string, data: FarmParams) => Promise<IUpdateFarmService.Result | IUpdateFarmService.Exist>
}

export namespace IUpdateFarmService {
    export type Exist = boolean;
    export type Result = {
        id?: string | number
    }
}