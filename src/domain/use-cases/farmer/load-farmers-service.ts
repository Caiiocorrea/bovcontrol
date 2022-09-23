import { FARMER_REPOSITORY, IFarmerRepository } from "@/domain/gateways/farmer-repository";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class LoadFarmersService {
    constructor(
        @Adapter(FARMER_REPOSITORY)
        private readonly loadFarmersRepository: IFarmerRepository
    ) {
    }

    async loadFarmersService(): Promise<IFarmerRepository.Result | IFarmerRepository.Exist | any> {
        return await this.loadFarmersRepository.loadFarmersRepository();
    }
}