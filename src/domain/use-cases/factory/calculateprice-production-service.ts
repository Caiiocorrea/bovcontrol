import { CALCULATE_PRICE_REPOSITORY, ICalculateRepository } from "@/domain/gateways/calculate-repository";
import { ITaxBaseRepository, TAXBASE_REPOSITORY } from "@/domain/gateways/taxbase-repository";
import { ICalculatePriceService } from "./Ifactory/Icalculateprice-production";
import { Adapter, Service } from "@tsclean/core";


@Service()
export class CalculatePriceService {
    constructor(
        @Adapter(TAXBASE_REPOSITORY) private readonly taxBaseRepository: ITaxBaseRepository,
        @Adapter(CALCULATE_PRICE_REPOSITORY) private readonly calculateRepository: ICalculateRepository
    ) { }

    protected taxbase: number;
    protected volumemouth: ICalculateRepository.Result;

    // Preço = (Volume do mês * Preço base) - (Custo por KM * distância da fazenda até a fábrica) + (Bônus p/ produção * litros entregues no mês)
    async calculate(semester: ICalculateRepository.Params, liter: ICalculateRepository.Params): Promise<ICalculateRepository.Result | any> {
        this.volumemouth = await this.volumeMoth(semester.semester, liter.liter)
        this.taxbase = await this.taxBase(semester.semester)

        if (semester.semester === 1 || 2 && liter.liter >= 10000) return this.caculateMax(liter.liter)
        if (semester.semester === 1 || 2 && liter.liter <= 10000) return this.caculatePattern(liter.liter)
    }


    async volumeMoth(semester: number, liter: number) {
        return await this.calculateRepository.calculate(semester, liter)
    }

    async taxBase(semester: number) {
        return await this.taxBaseRepository.getTaxBaseRepository(semester)
    }


    caculatePattern(liter: number) {
        return ((liter * this.taxbase['baseprice']) - (this.taxbase['kmPattern']))
    }

    caculateMax(liter: number) {
        return ((liter * this.taxbase['baseprice']) - (this.taxbase['kmPattern'] * 10) + (this.taxbase['bonusProduction'] * liter))
    }

    verifyKM(km: number) {
        if (km <= 50) return 'kmPattern'
        if (km >= 50) return 'kmUp'
    }

}