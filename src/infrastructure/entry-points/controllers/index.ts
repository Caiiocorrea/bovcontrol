import { AuthenticationController } from "@/infrastructure/entry-points/controllers/authentication/authentication-controller";

import { AddUserController } from "@/infrastructure/entry-points/controllers/user/add-user-controller";
import { GetUsersController } from "@/infrastructure/entry-points/controllers/user/get-users-controller";

import { AddFarmController } from "@/infrastructure/entry-points/controllers/farm/add-farm-controller";
import { LoadFarmsController } from "@/infrastructure/entry-points/controllers/farm/load-farms-controller";
import { GetFarmsController } from "@/infrastructure/entry-points/controllers/farm/get-farms-controller";
import { UpdateFarmController } from "@/infrastructure/entry-points/controllers/farm/update-farm-controller";
import { AddTaxBaseController } from "./taxbase/add-taxbase-controller";

import { AddFarmerController } from "@/infrastructure/entry-points/controllers/farmer/add-farmer-controller";
import { LoadFarmersController } from "@/infrastructure/entry-points/controllers/farmer/load-farmers-controller";
import { GetFarmersController } from "@/infrastructure/entry-points/controllers/farmer/get-farmers-controller";
import { UpdateFarmerController } from "@/infrastructure/entry-points/controllers/farmer/update-farmer-controller";

import { AddProductionController } from "@/infrastructure/entry-points/controllers/production/add-production-controller";
import { ProductionPriceLiterMothController } from "./production/production-price-liter-month-controller";
import { ProductionVolumeDayController } from "./production/production-volume-day-controller";



export const controllers = [
    AuthenticationController,

    AddUserController,
    GetUsersController,

    AddFarmController,
    LoadFarmsController,
    GetFarmsController,
    UpdateFarmController,

    AddFarmerController,
    LoadFarmersController,
    GetFarmersController,
    UpdateFarmerController,

    ProductionPriceLiterMothController,
    ProductionVolumeDayController,
    AddProductionController,

    AddTaxBaseController
]
