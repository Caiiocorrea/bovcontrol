import { GET_FARMS_SERVICE } from "../../../../domain/use-cases/farm/dto/get-farms-dto";
import { GetFarmsService } from "@/domain/use-cases/farm/get-farms-service";
import { IFarmRepository } from "@/domain/gateways/farm-repository";
import { Adapter, Get, Mapping } from "@tsclean/core";

@Mapping('api/v1/farm')
export class GetFarmsController {

    constructor(
        @Adapter(GET_FARMS_SERVICE)
        private readonly getFarmsService: GetFarmsService
    ) { }

    @Get()
    async getFarmController(cnpj: string): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        return await this.getFarmsService.getFarmService(cnpj);
    }

}
