import { Entity } from "../core/domain/entity";
import { FarmParams } from "./farm";
import { FarmerParams } from "./farmer";

type ProductionProps = {
    id?: string | number | object
    farm: FarmParams[];
    farmer: FarmerParams[];
    liter: number;
    price: number;
    dateregister?: Date;
    price_BR?: number;
    price_US?: number;
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