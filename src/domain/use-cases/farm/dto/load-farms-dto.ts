import { FarmParams } from "@/domain/entities/farm";

export const LOAD_FARMS_SERVICE = "LOAD_FARMS_SERVICE";

export interface ILoadFarmsService {
    loadFarmsService: () => Promise<FarmParams[]>
}