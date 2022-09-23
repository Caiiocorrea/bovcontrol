import { IUpdateFarmerService, UPDATE_FARMER_SERVICE } from "../../../../domain/use-cases/farmer/dto/update-farmer-dto";
import { ValidateFields } from "@/infrastructure/helpers/validate-fields";
import { Adapter, Body, Mapping, Param, Put, Req } from "@tsclean/core";
import { FarmerParams } from "@/domain/entities/farmer";

@Mapping('api/v1/farmers')
export class UpdateFarmerController {

    constructor(
        @Adapter(UPDATE_FARMER_SERVICE)
        private readonly updateFarmerService: IUpdateFarmerService
    ) { }


    @Put(':id')
    async updateFarmController(@Param() id: string, @Body() data: FarmerParams): Promise<IUpdateFarmerService.Result | IUpdateFarmerService.Exist | any> {
        try {
            const { errors, isValid } = ValidateFields.fieldsValidation(data);
            if (!isValid) return { statusCode: 422, body: { "message": errors } }
            const farm = await this.updateFarmerService.updateFarmerService(id, data);
            return farm === true ? { statusCode: 400, body: { "message": "Farm not found." } } : farm
        } catch (error) {
            return { statusCode: 500, body: { "message": error.message } }
        }
    }
}
