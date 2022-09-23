
import { AdressParams } from "@/domain/entities/adress";
import mongoose, { model, Schema } from "mongoose";

const schema = new Schema({
    id: mongoose.Types.ObjectId,
    zipcode: String,
    street: String,
    Number: Number,
    complement: String,
    district: String,
    state: String,
    city: String,
});

export const AdressModelSchema = model<AdressParams>('adress', schema);