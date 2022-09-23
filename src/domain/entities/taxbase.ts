import { Entity } from "../core/domain/entity";

type taxBaseProps = {
    id?: string | number | object;
    semester: number;
    baseprice: number;
    kmPattern: number;
    kmUp: number;
    bonusProduction: number;
    dateregister: Date
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


// {
//     "semester": 1,
//     "baseprice": 1.8,
//     "kmPattern": 0.05,
//     "kmUp": 0.06,
//     "bonusProduction": 0
// }

// {
//     "semester": 2,
//     "baseprice": 1.95,
//     "kmPattern": 0,
//     "kmUp": 0,
//     "bonusProduction": 0.01
// }