import { ProductionMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/production-mongoose-repository-adapter";
import { TaxBaseMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/taxbase-mongoose-repository-adapter";
import { FarmerMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/farmer-mongoose-repository-adapter";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import { FarmMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/farm-mongoose-repository-adapter";
import { PRODUCTION_PRICE_LITER_MONTH_SERVICE } from "@/domain/use-cases/production/dto/production-price-liter-month-dto";
import { AdressMongooseRepositoryAdapter } from "../adapters/orm/mongoose/adress-mongoose-repository-adapter";
import { CALCULATE_PRICE_SERVICE } from "@/domain/use-cases/production/dto/calculateprice-production-dto";
import { CalculatePriceService } from "@/domain/use-cases/production/calculateprice-production-service";
import { AUTHENTICATION_SERVICE } from "@/domain/use-cases/authentication/dto/authentication-dto";
import { UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/gateways/update-access-token-repository";
import { AuthenticationService } from "@/domain/use-cases/authentication/authentication-service";
import { BcryptAdapter } from "@/infrastructure/driven-adapters/adapters/bcrypt-adapter";
import { UPDATE_FARMER_SERVICE } from "@/domain/use-cases/farmer/dto/update-farmer-dto";
import { UpdateFarmerService } from "@/domain/use-cases/farmer/update-farmers-service";
import { LOAD_FARMERS_SERVICE } from "@/domain/use-cases/farmer/dto/load-farmers-dto";
import { ADD_TAXBASE_SERVICE } from "@/domain/use-cases/taxbase/dto/add-taxbase-dto";
import { GET_FARMERS_SERVICE } from "@/domain/use-cases/farmer/dto/get-farmers-dto";
import { HASH_COMPARE_REPOSITORY } from "@/domain/gateways/hash-compare-repository";
import { CALCULATE_PRICE_REPOSITORY } from "@/domain/gateways/calculate-repository";
import { LoadFarmersService } from "@/domain/use-cases/farmer/load-farmers-service";
import { JwtAdapter } from "@/infrastructure/driven-adapters/adapters/jwt-adapter";
import { AddTaxBaseService } from "@/domain/use-cases/taxbase/add-taxbase-service";
import { ADD_FARMER_SERVICE } from "@/domain/use-cases/farmer/dto/add-farmer-dto";
import { UPDATE_FARM_SERVICE } from "@/domain/use-cases/farm/dto/update-farm-dto";
import { GetFarmersService } from "@/domain/use-cases/farmer/get-farmers-service";
import { UpdateFarmService } from "@/domain/use-cases/farm/update-farm-service";
import { PRODUCTION_REPOSITORY } from "@/domain/gateways/production-repository";
import { LOAD_FARMS_SERVICE } from "@/domain/use-cases/farm/dto/load-farms-dto";
import { AddFarmerService } from "@/domain/use-cases/farmer/add-farmer-service";
import { GET_FARMS_SERVICE } from "@/domain/use-cases/farm/dto/get-farms-dto";
import { GET_USERS_SERVICE } from "@/domain/use-cases/user/dto/get-users-dto";
import { LoadFarmsService } from "@/domain/use-cases/farm/load-farms-service";
import { ADD_FARM_SERVICE } from "@/domain/use-cases/farm/dto/add-farm-dto";
import { ADD_USER_SERVICE } from "@/domain/use-cases/user/dto/add-user-dto";
import { GetUsersService } from "@/domain/use-cases/user/get-users-service";
import { GetFarmsService } from "@/domain/use-cases/farm/get-farms-service";
import { TAXBASE_REPOSITORY } from "@/domain/gateways/taxbase-repository";
import { ENCRYPT_REPOSITORY } from "@/domain/gateways/encrypt-repository";
import { DECRYPT_REPOSITORY } from "@/domain/gateways/decryp-repositoryt";
import { AddUserService } from "@/domain/use-cases/user/add-user-service";
import { AddFarmService } from "@/domain/use-cases/farm/add-farm-service";
import { FARMER_REPOSITORY } from "@/domain/gateways/farmer-repository";
import { ADRESS_REPOSITORY } from "@/domain/gateways/adress-repository";
import { HASH_REPOSITORY } from "@/domain/gateways/hash-repository";
import { FARM_REPOSITORY } from "@/domain/gateways/farm-repository";
import { USER_REPOSITORY } from "@/domain/gateways/user-repository";
import { ProductionPriceLiterMonthService } from "@/domain/use-cases/production/production-price-liter-month-service";
import { ADD_PRODUCTION_SERVICE } from "@/domain/use-cases/production/dto/add-production-service.dto";
import { AddProductionService } from "@/domain/use-cases/production/add-production-service";
import { PRODUCTION__VOLUME_DAY_SERVICE } from "@/domain/use-cases/production/dto/production-volume-day-dto";
import { ProductionVolumeDayService } from "@/domain/use-cases/production/production-volume-day-service";
import { PRODUCTION_PICE_LITER_MONTH_REPOSITORY } from "@/domain/gateways/production-price-liter-month-repository";
import { PRODUCTION_VOLUME_DAY_REPOSITORY } from "@/domain/gateways/production-volume-day-repository";


export const adapters = [
    //AUTHENTICATION REPOSITORY
    { provide: UPDATE_ACCESS_TOKEN_REPOSITORY, useClass: UserMongooseRepositoryAdapter },
    { provide: HASH_COMPARE_REPOSITORY, useClass: BcryptAdapter },
    { provide: DECRYPT_REPOSITORY, useClass: JwtAdapter },
    { provide: HASH_REPOSITORY, useClass: BcryptAdapter },
    { provide: ENCRYPT_REPOSITORY, useClass: JwtAdapter },

    //USER REPOSITORY
    { provide: USER_REPOSITORY, useClass: UserMongooseRepositoryAdapter },

    //ENDEREÇO REPOSITORY
    { provide: ADRESS_REPOSITORY, useClass: AdressMongooseRepositoryAdapter },

    //FARM REPOSITORY
    { provide: FARM_REPOSITORY, useClass: FarmMongooseRepositoryAdapter },

    //FARMER REPOSITORY
    { provide: FARMER_REPOSITORY, useClass: FarmerMongooseRepositoryAdapter },

    //PRODUCTION REPOSITORY
    { provide: PRODUCTION_PICE_LITER_MONTH_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
    { provide: PRODUCTION_VOLUME_DAY_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
    { provide: CALCULATE_PRICE_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },
    { provide: PRODUCTION_REPOSITORY, useClass: ProductionMongooseRepositoryAdapter },

    //TAXBASE REPOSITORY
    { provide: TAXBASE_REPOSITORY, useClass: TaxBaseMongooseRepositoryAdapter },
]

export const services = [
    //AUTENTICATION SERVICE
    { provide: AUTHENTICATION_SERVICE, useClass: AuthenticationService },

    //USER SERVICE
    { provide: ADD_USER_SERVICE, useClass: AddUserService },
    { provide: GET_USERS_SERVICE, useClass: GetUsersService },

    //FARM SERVICE
    { provide: ADD_FARM_SERVICE, useClass: AddFarmService },
    { provide: LOAD_FARMS_SERVICE, useClass: LoadFarmsService },
    { provide: GET_FARMS_SERVICE, useClass: GetFarmsService },
    { provide: UPDATE_FARM_SERVICE, useClass: UpdateFarmService },

    //FARMER SERVICE
    { provide: ADD_FARMER_SERVICE, useClass: AddFarmerService },
    { provide: LOAD_FARMERS_SERVICE, useClass: LoadFarmersService },
    { provide: GET_FARMERS_SERVICE, useClass: GetFarmersService },
    { provide: UPDATE_FARMER_SERVICE, useClass: UpdateFarmerService },

    // PRODUCTION SERVICE
    { provide: PRODUCTION_PRICE_LITER_MONTH_SERVICE, useClass: ProductionPriceLiterMonthService },
    { provide: PRODUCTION__VOLUME_DAY_SERVICE, useClass: ProductionVolumeDayService },
    { provide: ADD_PRODUCTION_SERVICE, useClass: AddProductionService },

    //TAXBASE SERVICE
    { provide: ADD_TAXBASE_SERVICE, useClass: AddTaxBaseService },

    //CALCULATE PRICE SERVICE
    { provide: CALCULATE_PRICE_SERVICE, useClass: CalculatePriceService }
]

