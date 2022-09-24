import { ProductionMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/factory-mongoose-repository-adapter";
import { FarmerMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/farmer-mongoose-repository-adapter";
import { FarmMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/farm-mongoose-repository-adapter";
import { PRODUCTION_PRICE_LITER_MONTH_SERVICE } from "@/domain/use-cases/factory/Ifactory/Iproduction-price-liter-month";
import { ProductionPriceLiterMonthService } from "@/domain/use-cases/factory/production-price-liter-month-service";
import { PRODUCTION_PICE_LITER_MONTH_REPOSITORY } from "@/domain/gateways/production-price-liter-month-repository";
import { AdressMongooseRepositoryAdapter } from "../adapters/orm/mongoose/adress-mongoose-repository-adapter";
import { PRODUCTION__VOLUME_DAY_SERVICE } from "@/domain/use-cases/factory/Ifactory/Iproduction-volume-day";
import { CALCULATE_PRICE_SERVICE } from "@/domain/use-cases/factory/Ifactory/Icalculateprice-production";
import { PRODUCTION_VOLUME_DAY_REPOSITORY } from "@/domain/gateways/production-volume-day-repository";
import { ProductionVolumeDayService } from "@/domain/use-cases/factory/production-volume-day-service";
import { CalculatePriceService } from "@/domain/use-cases/factory/calculateprice-production-service";
import { PRODUCTION_SERVICE } from "@/domain/use-cases/factory/Ifactory/Icrud-production";
import { UPDATE_FARMER_SERVICE } from "@/domain/use-cases/farmer/Ifarmer/Iupdate-farmer";
import { ProductionService } from "@/domain/use-cases/factory/crud-production-service";
import { UpdateFarmerService } from "@/domain/use-cases/farmer/update-farmers-service";
import { LOAD_FARMERS_SERVICE } from "@/domain/use-cases/farmer/Ifarmer/Iload-farmers";
import { GET_FARMERS_SERVICE } from "@/domain/use-cases/farmer/Ifarmer/Iget-farmers";
import { CALCULATE_PRICE_REPOSITORY } from "@/domain/gateways/calculate-repository";
import { LoadFarmersService } from "@/domain/use-cases/farmer/load-farmers-service";
import { ADD_FARMER_SERVICE } from "@/domain/use-cases/farmer/Ifarmer/Iadd-farmer";
import { GetFarmersService } from "@/domain/use-cases/farmer/get-farmers-service";
import { UPDATE_FARM_SERVICE } from "@/domain/use-cases/farm/Ifarm/Iupdate-farm";
import { PRODUCTION_REPOSITORY } from "@/domain/gateways/crud-production-repository";
import { AddFarmerService } from "@/domain/use-cases/farmer/add-farmer-service";
import { UpdateFarmService } from "@/domain/use-cases/farm/update-farm-service";
import { LOAD_FARMS_SERVICE } from "@/domain/use-cases/farm/Ifarm/Iload-farms";
import { TAXBASE_SERVICE } from "@/domain/use-cases/factory/Ifactory/Icrud-taxbase";
import { LoadFarmsService } from "@/domain/use-cases/farm/load-farms-service";
import { GET_FARMS_SERVICE } from "@/domain/use-cases/farm/Ifarm/Iget-farms";
import { GetFarmsService } from "@/domain/use-cases/farm/get-farms-service";
import { TaxBaseService } from "@/domain/use-cases/factory/crud-taxbase-service";
import { ADD_FARM_SERVICE } from "@/domain/use-cases/farm/Ifarm/Iadd-farm";
import { TAXBASE_REPOSITORY } from '@/domain/gateways/crud-taxbase-repository';
import { AddFarmService } from "@/domain/use-cases/farm/add-farm-service";
import { FARMER_REPOSITORY } from "@/domain/gateways/farmer-repository";
import { ADRESS_REPOSITORY } from "@/domain/gateways/adress-repository";
import { FARM_REPOSITORY } from "@/domain/gateways/farm-repository";


export const adapters = [
    { provide: ADRESS_REPOSITORY, useClass: AdressMongooseRepositoryAdapter }, //ADRESS_REPOSITORY
    { provide: FARMER_REPOSITORY, useClass: FarmerMongooseRepositoryAdapter },  //FARMER REPOSITORY
    { provide: FARM_REPOSITORY, useClass: FarmMongooseRepositoryAdapter }, //FARM REPOSITORY

    //FACTORY REPOSITORY
    { provide: PRODUCTION_PICE_LITER_MONTH_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
    { provide: PRODUCTION_VOLUME_DAY_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
    { provide: CALCULATE_PRICE_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
    { provide: PRODUCTION_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
    { provide: TAXBASE_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
]

export const services = [
    //FARM SERVICE
    { provide: UPDATE_FARM_SERVICE, useClass: UpdateFarmService },
    { provide: LOAD_FARMS_SERVICE, useClass: LoadFarmsService },
    { provide: GET_FARMS_SERVICE, useClass: GetFarmsService },
    { provide: ADD_FARM_SERVICE, useClass: AddFarmService },

    //FARMER SERVICE
    { provide: UPDATE_FARMER_SERVICE, useClass: UpdateFarmerService },
    { provide: LOAD_FARMERS_SERVICE, useClass: LoadFarmersService },
    { provide: GET_FARMERS_SERVICE, useClass: GetFarmersService },
    { provide: ADD_FARMER_SERVICE, useClass: AddFarmerService },

    //FACTORY SERVICE
    { provide: PRODUCTION_PRICE_LITER_MONTH_SERVICE, useClass: ProductionPriceLiterMonthService },
    { provide: PRODUCTION__VOLUME_DAY_SERVICE, useClass: ProductionVolumeDayService },
    { provide: CALCULATE_PRICE_SERVICE, useClass: CalculatePriceService },
    { provide: PRODUCTION_SERVICE, useClass: ProductionService },
    { provide: TAXBASE_SERVICE, useClass: TaxBaseService },
]

