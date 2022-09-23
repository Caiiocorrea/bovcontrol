import { FARMER_REPOSITORY, IFarmerRepository } from "@/domain/gateways/farmer-repository";
import { FarmerParams } from "@/domain/entities/farmer";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class UpdateFarmerService {
    constructor(
        @Adapter(FARMER_REPOSITORY)
        private readonly updateFarmerRepository: IFarmerRepository,
    ) { }

    async updateFarmerService(id: string, data: FarmerParams): Promise<IFarmerRepository.Result | IFarmerRepository.Exist | any> {
        const farmerExist = await this.updateFarmerRepository.getFarmersRepository(data.props.cpfcnpj)
        if (!farmerExist) return true;
        return await this.updateFarmerRepository.updateFarmerRepository(id, data);
    }
}