import { AdressParams } from "@/domain/entities/adress";
import { FarmerParams } from "@/domain/entities/farmer";

export const ADD_FARMER_SERVICE = "ADD_FARMER_SERVICE";

export interface IAddFarmerService {
    addFarmerService: (data: FarmerParams) => Promise<IAddFarmerService.Result | IAddFarmerService.Exist>
}

export namespace IAddFarmerService {
    export type Exist = boolean;
    export type Result = {
        id?: string | number
        cnpjcnpj: string;
        name: string;
        phone: string;
        email: string;
        adress: AdressParams[];
        adressId?: string | number | object
    }


}