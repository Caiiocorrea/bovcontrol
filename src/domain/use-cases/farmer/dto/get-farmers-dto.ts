import { FarmerParams } from "@/domain/entities/farmer";

export const GET_FARMERS_SERVICE = "GET_FARMERS_SERVICE";

export interface IGetFarmersDto {
    getFarmersService: () => Promise<FarmerParams[]>
}