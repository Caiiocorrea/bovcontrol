import { Entity } from "../core/domain/entity";
import { AdressParams } from "./adress";

export class FarmerProps {
    id?: string | number | object
    cpfcnpj: string;
    name: string;
    phone: string;
    email: string;
    adress?: AdressParams[];
    adressId: string | number | object;
    dateregister: Date;
}


export class FarmerParams extends Entity<FarmerProps> {
    public constructor(props: FarmerProps, id?: string) {
        super(props, id);
    }

    static create(props: FarmerProps, id?: string) {
        return new FarmerParams(props, id)
    }
}