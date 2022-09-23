import { FarmParams } from "@/domain/entities/farm";
import { AdressParams } from "../entities/adress";

export const FARM_REPOSITORY = "FARM_REPOSITORY";

export interface IFarmRepository {
    // checkCnpj: (cnpj: string) => Promise<IFarmRepository.Result | IFarmRepository.Exist>,
    updateFarmRepository: (id: string, data: FarmParams) => Promise<IFarmRepository.Result | IFarmRepository.Exist>,
    addFarmRepository: (data: FarmParams) => Promise<IFarmRepository.Result | IFarmRepository.Exist>,
    loadFarmsRepository: () => Promise<IFarmRepository.Result | IFarmRepository.Exist>,
    getFarmRepository: (cnpj: string) => Promise<IFarmRepository.Result | IFarmRepository.Exist>,
}

export namespace IFarmRepository {
    export type Exist = boolean;
    export type Result = {
        id?: string | number | object;
        cnpj: string;
        socialReason: string;
        fantasyName: string;
        email: string;
        adress?: AdressParams[];
        adressId: string | number | object;
    }

}