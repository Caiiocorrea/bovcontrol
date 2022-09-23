import { ADD_FARM_SERVICE, IAddFarmService } from "../../../../domain/use-cases/farm/dto/add-farm-dto";
import { ValidateFields } from "@/infrastructure/helpers/validate-fields";
import { Adapter, Body, Mapping, Post } from "@tsclean/core";
import { FarmParams } from "@/domain/entities/farm";

@Mapping('api/v1/farms')
export class AddFarmController {

    constructor(
        @Adapter(ADD_FARM_SERVICE)
        private readonly addFarmService: IAddFarmService
    ) { }

    @Post()
    async addFarmController(@Body() data: FarmParams): Promise<IAddFarmService.Result | IAddFarmService.Exist | any> {
        const { errors, isValid } = ValidateFields.fieldsValidation(data);
        if (!isValid) return { statusCode: 422, body: { "message": errors } }
        const addfarm = await this.addFarmService.addFarmService(data);
        return { statusCode: 201, body: { message: 'Farm successfully registered.', addfarm } }
    }
}
