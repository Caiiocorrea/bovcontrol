import { IProductionPriceLiterMothRepository } from "@/domain/gateways/production-price-liter-month-repository";
import { IProductionVolumeDayRepository } from "@/domain/gateways/production-volume-day-repository";
import { IProductionRepository } from "@/domain/gateways/crud-production-repository";
import { ICalculateRepository } from "@/domain/gateways/calculate-repository";
import { ITaxBaseRepository } from "@/domain/gateways/crud-taxbase-repository";
import { ConvertCoin } from "@/infrastructure/helpers/convert-coin";
import { ProductionParams } from "@/domain/entities/production";
import { ProductionModelSchema } from "./models/production";
import { TaxBaseModelSchema } from "./models/taxbase";
import mongoose from 'mongoose';
import moment from "moment";

export class ProductionMongooseRepositoryAdapter implements
    IProductionRepository,
    ICalculateRepository,
    IProductionPriceLiterMothRepository,
    IProductionVolumeDayRepository,
    ITaxBaseRepository {

    map(data: any): any {
        const { _id, price, liter, averagemonthliter, averagemonthprice } = data
        return {
            day: _id.day,
            month: _id.month,
            year: _id.year,
            price,
            liter,
            averagemonthprice,
            averagemonthliter,
            price_BRL: ConvertCoin.convertCoinBRL(price),
            price_USD: ConvertCoin.convertCoinUSD(price)
        }
    }

    //PRODUCTION
    async getProductionRepository(id: string): Promise<IProductionRepository.Result | IProductionRepository.Exist | any> {
        console.log(id)
        return await ProductionModelSchema.find({ _id: new mongoose.Types.ObjectId(id) }).populate({ path: 'farm' }).populate({ path: 'farmer' })
    }

    async addProductionRepository(data: IProductionRepository.Params): Promise<IProductionRepository.Result | IProductionRepository.Exist | any> {
        return await ProductionModelSchema.create(data);
    }

    async ProductionCalculatePrice(): Promise<IProductionRepository.Result | IProductionRepository.Exist | any> {
        return await ProductionModelSchema.find()
    }

    async ProductionVolumeDay(data: IProductionVolumeDayRepository.Params): Promise<IProductionVolumeDayRepository.Result | any> {
        const ProductionVolumeDayRepository = await ProductionModelSchema.aggregate([
            {
                $match: {
                    farmer: new mongoose.Types.ObjectId(data.farmer),
                    dateregister: {
                        $gte: moment(data.dateregister || Date.now()).startOf('month').toDate(),
                        $lte: moment(moment(data.dateregister || Date.now()).endOf('month').format("YYYY-MM-") + moment().daysInMonth()).toDate()
                    }
                }
            },
            {
                $group: {
                    _id: {
                        day: { $dayOfMonth: "$dateregister" },
                    },
                    liter: { $sum: '$liter' },
                    averagemonthliter: { $avg: '$liter' }
                },
            },
        ])

        return ProductionVolumeDayRepository
    }

    async ProductionPriceLiterMonth(data: IProductionPriceLiterMothRepository.Params): Promise<IProductionPriceLiterMothRepository.Result | any> {
        console.log('ProductionPriceLiterMonth >>', data)
        const ProductionPriceLiterMonth = await ProductionModelSchema.aggregate([
            {
                $match: {
                    farmer: new mongoose.Types.ObjectId(data.farmer),
                    dateregister: {
                        $gte: moment(data.dateregister || Date.now()).startOf('month').toDate(),
                        $lte: moment(moment(data.dateregister || Date.now()).endOf('month').format("YYYY-MM-") + moment().daysInMonth()).toDate()
                    },
                }
            },
            {
                $group: {
                    _id: { month: { $month: "$dateregister" } },
                    price: { $sum: '$price' },
                    liter: { $sum: '$liter' },
                    averagemonthprice: { $avg: '$price' },
                    averagemonthliter: { $avg: '$liter' }
                },
            },
        ])

        console.log(ProductionPriceLiterMonth)
        return this.map(ProductionPriceLiterMonth[0])
    }

    async ProductionPriceLiterYear(data: IProductionVolumeDayRepository.Params): Promise<IProductionVolumeDayRepository.Result | any> {
        const ProductionVolumeDayRepository = await ProductionModelSchema.aggregate([
            {
                $match: {
                    farmer: new mongoose.Types.ObjectId(data.farmer),
                    dateregister: {
                        $gte: moment(data.dateregister || Date.now()).startOf('year').toDate(),
                        $lte: moment(moment(data.dateregister || Date.now()).endOf('year').format("YYYY-MM-") + moment().daysInMonth()).toDate()
                    }
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$dateregister" }
                    },
                    liter: { $sum: '$liter' },
                    averagemonthliter: { $avg: '$liter' }
                },
            },
        ])

        return ProductionVolumeDayRepository
    }

    //CALCULATE
    async calculate(): Promise<ICalculateRepository.Result | ICalculateRepository.Exist | any> {
        const calculate = await ProductionModelSchema.aggregate([{
            $group: {
                _id: {
                    year: { $year: "$dateregister" }
                    // month: { $month: "$dateregister" }
                },
                liter: { $sum: '$liter' },
                price: { $sum: '$price' }
            }
        }
        ])

        return calculate
    }

    //TAX BASE
    async getTaxBaseRepository(semester: number): Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist | any> {
        return await TaxBaseModelSchema.findOne({ semester })
    }

    async addTaxBaseRepository(data: ITaxBaseRepository.Params): Promise<ITaxBaseRepository.Result | ITaxBaseRepository.Exist | any> {
        return await TaxBaseModelSchema.create(data);
    }
}