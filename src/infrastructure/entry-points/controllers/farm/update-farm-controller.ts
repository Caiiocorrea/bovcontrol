import { IUpdateFarmService, UPDATE_FARM_SERVICE } from "../../../../domain/use-cases/farm/Ifarm/Iupdate-farm";
import { ValidateFields } from "@/infrastructure/helpers/validate-fields";
import { Adapter, Body, Mapping, Param, Put, Req } from "@tsclean/core";
import { FarmParams } from "@/domain/entities/farm";

@Mapping('api/v1/farms')
export class UpdateFarmController {

    constructor(
        @Adapter(UPDATE_FARM_SERVICE)
        private readonly updateFarmService: IUpdateFarmService
    ) { }


    @Put(':id')
    async updateFarmController(@Param() id: string, @Body() data: FarmParams): Promise<IUpdateFarmService.Result | IUpdateFarmService.Exist | any> {
        try {
            const { errors, isValid } = ValidateFields.fieldsValidation(data);
            if (!isValid) return { statusCode: 422, body: { "message": errors } }
            const farm = await this.updateFarmService.updateFarmService(id, data);
            return farm === true ? { statusCode: 400, body: { "message": "Farm not found." } } : farm
        } catch (error) {
            return { statusCode: 500, body: { "message": error.message } }
        }
    }
}
