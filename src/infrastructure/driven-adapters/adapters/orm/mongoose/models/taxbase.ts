import { taxBaseParams } from '@/domain/entities/taxbase';
import { model, Schema } from "mongoose";

const schema = new Schema({
    semester: Number,
    baseprice: Number,
    kmPattern: Number,
    kmUp: Number,
    bonusProduction: Number
});

export const TaxBaseModelSchema = model<taxBaseParams>('taxbase', schema);
