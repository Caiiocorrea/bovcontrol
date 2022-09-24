import { Entity } from "../core/domain/entity";
import { FarmParams } from "./farm";
import { FarmerParams } from "./farmer";

export class ProductionProps {
    id?: string | number | object
    farm: string | number | object;
    farmer: string | number | object
    liter: number;
    price: number;
    price_BR?: number;
    price_US?: number;
    dateregister?: Date;
}

export class ProductionParams extends Entity<ProductionProps> {
    public constructor(props: ProductionProps, id?: string) {
        super(props, id);
    }

    static create(props: ProductionProps, id?: string) {
        const production = new ProductionParams(props, id)
        return production;
    }
}