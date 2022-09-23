import { FarmParams } from '@/domain/entities/farm';
import mongoose, { model, Schema } from "mongoose";

const schema = new Schema({
    cnpj: String,
    socialReason: String,
    fantasyName: String,
    email: String,
    adressId: { type: mongoose.Types.ObjectId, ref: 'adress' }
});

export const FarmModelSchema = model<FarmParams>('farms', schema);
