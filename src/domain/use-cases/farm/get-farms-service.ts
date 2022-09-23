import { FARM_REPOSITORY, IFarmRepository } from "@/domain/gateways/farm-repository";
import { FarmParams } from "@/domain/entities/farm";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class GetFarmsService {
    constructor(
        @Adapter(FARM_REPOSITORY)
        private readonly getFarmsRepository: IFarmRepository
    ) {
    }

    async getFarmService(cpfcnpj: string): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        return await this.getFarmsRepository.getFarmRepository(cpfcnpj);
    }

}