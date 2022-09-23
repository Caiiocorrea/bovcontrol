import { FARMER_REPOSITORY, IFarmerRepository } from "@/domain/gateways/farmer-repository";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class GetFarmersService {
    constructor(
        @Adapter(FARMER_REPOSITORY)
        private readonly getFarmsRepository: IFarmerRepository
    ) {
    }

    async getFarmersService(cpfcnpj: string): Promise<IFarmerRepository.Result | IFarmerRepository.Exist | any> {
        return await this.getFarmsRepository.getFarmersRepository(cpfcnpj);
    }

}