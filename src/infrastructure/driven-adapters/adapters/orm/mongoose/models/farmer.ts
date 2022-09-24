import { FarmerProps } from "@/domain/entities/farmer";
import mongoose, { model, Schema } from "mongoose";
import moment from "moment";

const schema = new Schema<FarmerProps>({
    id: String,
    cpfcnpj: String,
    name: String,
    phone: String,
    email: String,
    adressId: { type: mongoose.Types.ObjectId, ref: 'adress' },
    dateregister: {
        type: Date,
        default: moment().utcOffset('-0100').toDate()
    }
});

export const FarmerModelSchema = model<FarmerProps>('farmers', schema);