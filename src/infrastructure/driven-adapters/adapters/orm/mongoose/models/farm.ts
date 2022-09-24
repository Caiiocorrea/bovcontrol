import { FarmProps } from '@/domain/entities/farm';
import mongoose, { model, Schema } from "mongoose";
import moment from 'moment';

const schema = new Schema<FarmProps>({
    cnpj: String,
    socialReason: String,
    fantasyName: String,
    email: String,
    adressId: { type: mongoose.Types.ObjectId, ref: 'adress' },
    dateregister: {
        type: Date,
        default: moment().utcOffset('-0100').toDate()
    }
});

export const FarmModelSchema = model<FarmProps>('farms', schema);
