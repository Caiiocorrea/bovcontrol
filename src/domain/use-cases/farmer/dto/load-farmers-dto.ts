import { FarmerParams } from "@/domain/entities/farmer";

export const LOAD_FARMERS_SERVICE = "LOAD_FARMERS_SERVICE";

export interface ILoadFarmersService {
    loadFarmersService: () => Promise<FarmerParams[]>
}