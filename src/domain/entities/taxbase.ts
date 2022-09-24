import { Entity } from "../core/domain/entity";

export class taxBaseProps {
    id?: string | number | object;
    semester: number;
    baseprice: number;
    kmPattern: number;
    kmUp: number;
    bonusProduction: number;
    dateregister: Date;
}

export class taxBaseParams extends Entity<taxBaseProps> {
    public constructor(props: taxBaseProps, id?: string) {
        super(props, id);
    }

    static create(props: taxBaseProps, id?: string) {
        const taxbase = new taxBaseParams(props, id)
        return taxbase;
    }
}