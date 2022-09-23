import { ADRESS_REPOSITORY, IAdressRepository } from "@/domain/gateways/adress-repository";
import { FARM_REPOSITORY, IFarmRepository } from "@/domain/gateways/farm-repository";
import { FarmParams } from "@/domain/entities/farm";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class AddFarmService {
    constructor(
        @Adapter(FARM_REPOSITORY)
        private readonly addFarmRepository: IFarmRepository,
        @Adapter(ADRESS_REPOSITORY)
        private readonly adressRepository: IAdressRepository,
    ) { }

    async addFarmService(data: FarmParams): Promise<IFarmRepository.Result | IFarmRepository.Exist | any> {
        const farm = await this.addFarmRepository.getFarmRepository(data.cnpj)
        const adressId = await this.adressRepository.getzipCodeRepository(data.adress[0].zipcode)
        data.adressId = adressId['_id']

        if (farm && adressId) {
            await this.adressRepository.updateAdressRepository(data.adressId, data.adress[0])
            await this.addFarmRepository.updateFarmRepository(farm['_id'], data)
            return await this.addFarmRepository.getFarmRepository(data.cnpj)
        }

        else if (!farm && !adressId) {
            const adress = await this.adressRepository.addAdressRepository(data.adress)
            data.adressId = adress[0]._id
            await this.addFarmRepository.addFarmRepository(data);
            return await this.addFarmRepository.getFarmRepository(data.cnpj)
        }
    }
}