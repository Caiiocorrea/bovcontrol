import { FARM_REPOSITORY, IFarmRepository } from "@/domain/gateways/farm-repository";
import { FarmParams } from "@/domain/entities/farm";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class UpdateFarmService {
    constructor(
        @Adapter(FARM_REPOSITORY)
        private updateFarmRepository: IFarmRepository,
    ) { }

    async updateFarmService(id: string, data: FarmParams): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        // const farmExist = await this.updateFarmRepository.checkCnpj(data.props.cnpj)
        // if (!farmExist) return true;
        return await this.updateFarmRepository.updateFarmRepository(id, data);
    }
}