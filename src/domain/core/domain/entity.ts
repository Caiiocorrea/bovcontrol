import mongoose from "mongoose";

export abstract class Entity<T>{
    protected _id: object | string | number;
    public props: T;

    get adressId() { return this.adressId }
    set adressId(adressId: string) { this.adressId = this.adressId }
    get cpfcnpj() { return this.cpfcnpj }
    get cnpj() { return this.cnpj }
    get semester() { return this.semester }
    get adress() { return this.adress }
    get id() { return this._id }
    get price() { return this.price }



    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id ?? mongoose.Types.ObjectId
    }
}