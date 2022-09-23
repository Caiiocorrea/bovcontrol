import { AdressParams } from "../entities/adress";

export const ADRESS_REPOSITORY = "ADRESS_REPOSITORY";

export interface IAdressRepository {
    getzipCodeRepository: (zipcode: string) => Promise<IAdressRepository.Result | IAdressRepository.Exist>,
    addAdressRepository: (data: AdressParams) => Promise<IAdressRepository.Result | IAdressRepository.Exist>,
    updateAdressRepository: (id: string, data: AdressParams) => Promise<IAdressRepository.Result | IAdressRepository.Exist>,
}

export namespace IAdressRepository {
    export type Exist = boolean;
    export type Result = {
        id?: string;
        zipcode: string;
        street: string;
        Number: number;
        complement: string;
        district: string;
        state: string;
        city: string
    }

}