import { Adapter, Get, Mapping } from "@tsclean/core";
import { LOAD_FARMS_SERVICE, ILoadFarmsService } from "../../../../domain/use-cases/farm/Ifarm/Iload-farms";

@Mapping('api/v1/farms')
export class LoadFarmsController {

    constructor(
        @Adapter(LOAD_FARMS_SERVICE)
        private readonly loadFarmsService: ILoadFarmsService
    ) { }

    @Get()
    async loadFarmsController(): Promise<any> {
        return await this.loadFarmsService.loadFarmsService()
    }
}
