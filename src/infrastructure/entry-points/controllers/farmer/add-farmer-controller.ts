import { AddFarmerService } from "@/domain/use-cases/farmer/add-farmer-service";
import { ValidateFields } from "@/infrastructure/helpers/validate-fields";
import { ADD_FARMER_SERVICE } from "../../../../domain/use-cases/farmer/Ifarmer/Iadd-farmer";
import { Adapter, Body, Mapping, Post } from "@tsclean/core";
import { FarmerParams } from "@/domain/entities/farmer";

@Mapping('api/v1/farmers')
export class AddFarmerController {

    constructor(
        @Adapter(ADD_FARMER_SERVICE)
        private readonly addFarmService: AddFarmerService
    ) { }

    @Post()
    async addFarmerController(@Body() data: FarmerParams): Promise<FarmerParams[] | any> {
        // console.log(data)
        const { errors, isValid } = ValidateFields.fieldsValidation(data);
        if (!isValid) return { statusCode: 422, body: { "message": errors } }
        const farm = await this.addFarmService.addFarmerService(data);
        return farm;
    }
}
