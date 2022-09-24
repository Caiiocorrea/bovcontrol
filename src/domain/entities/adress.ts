import { Entity } from "../core/domain/entity";

export class AdressProps {
    id?: string;
    zipcode: string;
    street: string;
    Number: number;
    complement: string;
    district: string;
    state: string;
    city: string;
    dateregister: Date;
}

export class AdressParams extends Entity<AdressProps> {
    public constructor(props: AdressProps, id?: string) {
        super(props, id);
    }

    static create(props: AdressProps, id?: string) {
        return new AdressParams(props, id)
    }
}