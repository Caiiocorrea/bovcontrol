import { FARMER_REPOSITORY, IFarmerRepository } from "@/domain/gateways/farmer-repository";
import { ADRESS_REPOSITORY, IAdressRepository } from "@/domain/gateways/adress-repository";
import { IAddFarmerService } from "./Ifarmer/Iadd-farmer";
import { FarmerParams } from "@/domain/entities/farmer";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class AddFarmerService {
    constructor(
        @Adapter(FARMER_REPOSITORY)
        private readonly farmerRepository: IFarmerRepository,
        @Adapter(ADRESS_REPOSITORY)
        private readonly adressRepository: IAdressRepository,
    ) { }

    async addFarmerService(data: FarmerParams): Promise<IAddFarmerService.Result | IAddFarmerService.Exist | any> {
        const farmer = await this.farmerRepository.getFarmersRepository(data.cpfcnpj)
        const adressId = await this.adressRepository.getzipCodeRepository(data.adress[0].zipcode)
        data.adressId = adressId['_id']

        if (farmer && adressId) {
            await this.adressRepository.updateAdressRepository(data.adressId, data.adress[0])
            await this.farmerRepository.updateFarmerRepository(farmer['_id'], data)
            return await this.farmerRepository.getFarmersRepository(data.cpfcnpj)
        }

        else if (!farmer && !adressId) {
            const adress = await this.adressRepository.addAdressRepository(data.adress)
            data.adressId = adress[0]._id
            await this.farmerRepository.addFarmerRepository(data);
            return await this.farmerRepository.getFarmersRepository(data.cpfcnpj)
        }
    }
}