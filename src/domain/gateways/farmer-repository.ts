import { FarmerParams } from "../entities/farmer";

export const FARMER_REPOSITORY = "FARMER_REPOSITORY";

export interface IFarmerRepository {
    addFarmerRepository: (data: FarmerParams) => Promise<IFarmerRepository.Result | IFarmerRepository.Exist>,
    updateFarmerRepository: (id: string, data: FarmerParams) => Promise<FarmerParams>
    loadFarmersRepository: () => Promise<IFarmerRepository.Result | IFarmerRepository.Exist>,
    getFarmersRepository: (cpfcnpj: string) => Promise<IFarmerRepository.Result | IFarmerRepository.Exist>,
}

export namespace IFarmerRepository {
    export type Result = {
        id?: string | number | object;
        cpfcnpj: string;
        name: string;
        phone: string;
        email: string;
        adressId?: string | number | object;
    }

    export type Exist = boolean;
}