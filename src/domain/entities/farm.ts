import { Entity } from "../core/domain/entity";
import { AdressParams } from "./adress";

export class FarmProps {
    id?: object | string | number
    cnpj: string;
    socialReason: string;
    fantasyName: string;
    email: string;
    adressId?: object;
    adress?: AdressParams[];
    dateregister: Date;
}

export class FarmParams extends Entity<FarmProps> {
    public constructor(props: FarmProps, id?: string) {
        super(props, id);
    }

    static create(props: FarmProps, id?: string) {
        return new FarmParams(props, id)
    }
}