import { Entity } from "../core/domain/entity";
import { AdressParams } from "./adress";

type FarmProps = {
    id?: object | string | number
    cnpj: string;
    socialReason: string;
    fantasyName: string;
    email: string;
    adressId?: object;
    adress?: AdressParams[];
}

export class FarmParams extends Entity<FarmProps> {
    public constructor(props: FarmProps, id?: string) {
        super(props, id);
    }

    static create(props: FarmProps, id?: string) {
        return new FarmParams(props, id)
    }
}