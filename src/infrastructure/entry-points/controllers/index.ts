import { AddFarmController } from "@/infrastructure/entry-points/controllers/farm/add-farm-controller";
import { LoadFarmsController } from "@/infrastructure/entry-points/controllers/farm/load-farms-controller";
import { GetFarmsController } from "@/infrastructure/entry-points/controllers/farm/get-farms-controller";
import { UpdateFarmController } from "@/infrastructure/entry-points/controllers/farm/update-farm-controller";
import { AddTaxBaseController } from "./factory/add-taxbase-controller";

import { AddFarmerController } from "@/infrastructure/entry-points/controllers/farmer/add-farmer-controller";
import { LoadFarmersController } from "@/infrastructure/entry-points/controllers/farmer/load-farmers-controller";
import { GetFarmersController } from "@/infrastructure/entry-points/controllers/farmer/get-farmers-controller";
import { UpdateFarmerController } from "@/infrastructure/entry-points/controllers/farmer/update-farmer-controller";

import { AddProductionController } from "@/infrastructure/entry-points/controllers/factory/add-production-controller";
import { ProductionPriceLiterMothController } from "./factory/production-price-liter-month-controller";
import { ProductionVolumeDayController } from "./factory/production-volume-day-controller";



export const controllers = [
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
