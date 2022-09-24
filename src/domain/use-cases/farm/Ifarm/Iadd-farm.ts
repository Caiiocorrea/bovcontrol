import { FarmParams } from "@/domain/entities/farm";

export const ADD_FARM_SERVICE = "ADD_FARM_SERVICE";

export interface IAddFarmService {
    addFarmService: (data: FarmParams) => Promise<IAddFarmService.Result | IAddFarmService.Exist>
}

export namespace IAddFarmService {
    export type Exist = boolean;
    export type Result = {
        id?: string | number | object;
    }
}