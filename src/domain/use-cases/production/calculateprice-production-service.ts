import { CALCULATE_PRICE_REPOSITORY, ICalculateRepository } from "@/domain/gateways/calculate-repository";
import { ITaxBaseRepository, TAXBASE_REPOSITORY } from "@/domain/gateways/taxbase-repository";
import { ICalculatePriceService } from "./dto/calculateprice-production-dto";
import { Adapter, Service } from "@tsclean/core";


@Service()
export class CalculatePriceService implements ICalculatePriceService {
    constructor(
        @Adapter(TAXBASE_REPOSITORY) private readonly taxBaseRepository: ITaxBaseRepository,
        @Adapter(CALCULATE_PRICE_REPOSITORY) private readonly calculateRepository: ICalculateRepository
    ) { }

    private taxbase: {} = []
    private volumemouth: {} = []

    // Preço = (Volume do mês * Preço base) - (Custo por KM * distância da fazenda até a fábrica) + (Bônus p/ produção * litros entregues no mês)
    async calculate(semester: number, liter: number): Promise<ICalculateRepository.Result | any> {
        this.volumemouth = await this.volumeMouth(semester, liter)
        this.taxbase = await this.taxBase(semester)

        if (semester === 1 || 2 && liter >= 10000) return this.caculateMax(liter)
        if (semester === 1 || 2 && liter <= 10000) return this.caculatePattern(liter)

    }


    async volumeMouth(semester: number, liter: number) {
        return await this.calculateRepository.calculate(semester, liter)
    }

    async taxBase(semester: number) {
        return await this.taxBaseRepository.getTaxBaseRepository(semester)
    }

    async caculatePattern(liter: number) {
        return ((liter * this.taxbase['baseprice']) - (this.taxbase['kmPattern']))
    }

    async caculateMax(liter: number) {
        return ((liter * this.taxbase['baseprice']) - (this.taxbase['kmPattern'] * 10) + (this.taxbase['bonusProduction'] * liter))
    }

}