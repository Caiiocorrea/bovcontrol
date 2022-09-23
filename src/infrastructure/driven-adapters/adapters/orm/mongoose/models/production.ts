import { ProductionParams } from '@/domain/entities/production';
import mongoose, { model, Schema } from "mongoose";
import moment from 'moment';

const schema = new Schema({
    id: String,
    farm: { type: mongoose.Types.ObjectId, ref: 'farms' },
    farmer: { type: mongoose.Types.ObjectId, ref: 'farmers' },
    liter: Number,
    price: Number,
    dateregister: {
        type: Date,
        default: moment().utcOffset('-0100').toDate()
    }
});

export const ProductionModelSchema = model<any>('production', schema);
