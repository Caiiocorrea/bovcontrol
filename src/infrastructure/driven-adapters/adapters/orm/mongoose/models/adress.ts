
import { AdressProps } from "@/domain/entities/adress";
import mongoose, { model, Schema } from "mongoose";
import moment from "moment";

const schema = new Schema<AdressProps>({
    id: mongoose.Types.ObjectId,
    zipcode: String,
    street: String,
    Number: Number,
    complement: String,
    district: String,
    state: String,
    city: String,
    dateregister: {
        type: Date,
        default: moment().utcOffset('-0100').toDate()
    }
});

export const AdressModelSchema = model<AdressProps>('adress', schema);