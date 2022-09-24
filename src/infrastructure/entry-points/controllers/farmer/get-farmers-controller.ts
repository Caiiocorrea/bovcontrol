import { GetFarmersService } from "@/domain/use-cases/farmer/get-farmers-service";
import { Adapter, Get, Mapping } from "@tsclean/core";
import { GET_FARMERS_SERVICE } from "../../../../domain/use-cases/farmer/Ifarmer/Iget-farmers";

@Mapping('api/v1/farmers')
export class GetFarmersController {

    constructor(
        @Adapter(GET_FARMERS_SERVICE)
        private readonly getFarmersService: GetFarmersService
    ) { }

    @Get(':id')
    // @Auth(["admin", "guest"])
    async getFarmersController(cnpjcnpj: string): Promise<any> {
        return await this.getFarmersService.getFarmersService(cnpjcnpj);
    }

}
