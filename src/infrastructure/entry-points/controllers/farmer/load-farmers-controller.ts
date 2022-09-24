import { Adapter, Get, Mapping } from "@tsclean/core";
import { LOAD_FARMERS_SERVICE, ILoadFarmersService } from "../../../../domain/use-cases/farmer/Ifarmer/Iload-farmers";

@Mapping('api/v1/farmers')
export class LoadFarmersController {

    constructor(
        @Adapter(LOAD_FARMERS_SERVICE)
        private readonly loadFarmersService: ILoadFarmersService
    ) { }

    @Get()
    async loadFarmersController(): Promise<any> {
        return await this.loadFarmersService.loadFarmersService()
    }
}
