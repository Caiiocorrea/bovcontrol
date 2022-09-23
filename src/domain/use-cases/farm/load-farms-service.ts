import { FARM_REPOSITORY, IFarmRepository } from "@/domain/gateways/farm-repository";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class LoadFarmsService {
    constructor(
        @Adapter(FARM_REPOSITORY)
        private readonly loadFarmsRepository: IFarmRepository
    ) {
    }

    async loadFarmsService(): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        return await this.loadFarmsRepository.loadFarmsRepository();
    }
}