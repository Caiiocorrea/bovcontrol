export const GET_FARMS_SERVICE = "GET_FARMS_SERVICE";


export interface IGetFarmsService {
    getFarmsService: (cnpj: string) => Promise<IGetFarmsService.Result | IGetFarmsService.Exist | any>
}

export namespace IGetFarmsService {
    export type Result = {
        id?: string | number | object;
    }


    export type Exist = boolean;
}