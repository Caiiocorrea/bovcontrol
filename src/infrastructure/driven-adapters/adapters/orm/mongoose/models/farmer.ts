import { FarmerParams } from "@/domain/entities/farmer";
import mongoose, { model, Schema } from "mongoose";

const schema = new Schema({
    id: String,
    cpfcnpj: String,
    name: String,
    phone: String,
    email: String,
    adressId: { type: mongoose.Types.ObjectId, ref: 'adress' }
});

export const FarmerModelSchema = model<FarmerParams>('farmers', schema);