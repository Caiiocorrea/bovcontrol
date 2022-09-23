
import { IProductionVolumeDayRepository } from "@/domain/gateways/production-volume-day-repository";
import { IProductionPriceLiterMothRepository } from "@/domain/gateways/production-price-liter-month-repository";
import { IProductionRepository } from "@/domain/gateways/production-repository";
import { ICalculateRepository } from "@/domain/gateways/calculate-repository";
import { ConvertCoin } from "@/infrastructure/helpers/convert-coin";
import { ProductionParams } from "@/domain/entities/production";
import { ProductionModelSchema } from "./models/production";
import mongoose from 'mongoose';
import moment from "moment";

// console.log("day:", moment().month('2022-09-22T0:00:00.000Z').startOf('day').toDate())
// console.log("day:", moment().month('2022-09-22T:59:00.000Z').endOf('day').toDate())

// console.log("day:", moment('2022-09-23').startOf('month').toDate())
// console.log("day:", moment(moment('2022-09-23').endOf('month').format("YYYY-MM-") + moment().daysInMonth()).toDate())
// console.log("month:", moment(Date.now()).startOf('month').toDate())
// console.log("year:", moment(Date.now()).startOf('year').toDate())
// console.log("month:", moment().month('2022-09-22T01:00:00.000Z').startOf('month').toDate())
// console.log("month:", moment().month('2022-09-22T23:59:00.000Z').endOf('month').toDate())

console.log("year:", moment('2022-09-23').startOf('year').toDate())
console.log("year:", moment('2022-09-23').endOf('year').toDate())
console.log("year:", moment(moment('2022-09-23').endOf('year').format("YYYY-MM-") + moment().daysInMonth()).toDate())


export class ProductionMongooseRepositoryAdapter implements
    IProductionRepository,
    ICalculateRepository,
    IProductionPriceLiterMothRepository,
    IProductionVolumeDayRepository {

    map(data: any): any {
        const { _id, price, liter, averagemonthliter, averagemonthprice } = data

        return {
            day: data._id.day,
            month: data._id.month,
            year: data._id.year,
            price,
            liter,
            averagemonthprice,
            averagemonthliter,
            price_BRL: price ? ConvertCoin.convertCoinBRL(price) : 0,
            price_USD: price ? ConvertCoin.convertCoinUSD(price) : 0
        }
    }

    async ProductionCalculatePrice(): Promise<IProductionRepository.Result | IProductionRepository.Exist | any> {
        return await ProductionModelSchema.find()
    }

    async getProduction(id: string): Promise<ProductionParams | any> {
        return await ProductionModelSchema.find({ _id: new mongoose.Types.ObjectId(id) }).populate({ path: 'farm' }).populate({ path: 'farmer' })
    }

    async addProductionRepository(data: IProductionRepository.Params): Promise<IProductionRepository.Result | IProductionRepository.Exist | any> {
        return await ProductionModelSchema.create(data);
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
                        $gte: moment().month(data.dateregister || Date.now()).startOf('month').toDate(),
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
        return await this.map({ ...ProductionPriceLiterMonth })
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
}