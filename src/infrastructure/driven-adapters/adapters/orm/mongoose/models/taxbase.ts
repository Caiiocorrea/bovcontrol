import { taxBaseProps } from '@/domain/entities/taxbase';
import { model, Schema } from "mongoose";
import mongoose from 'mongoose';
import moment from 'moment';

const schema = new Schema<taxBaseProps>({
    id: mongoose.Types.ObjectId,
    semester: Number,
    baseprice: Number,
    kmPattern: Number,
    kmUp: Number,
    bonusProduction: Number,
    dateregister: {
        type: Date,
        default: moment().utcOffset('-0100').toDate()
    }
});

export const TaxBaseModelSchema = model<taxBaseProps>('taxbase', schema);
