import { ITaxBaseService, TAXBASE_SERVICE } from "@/domain/use-cases/factory/Ifactory/Icrud-taxbase";
import { Adapter, Body, Mapping, Post } from "@tsclean/core";

@Mapping('api/v1/taxbases')
export class AddTaxBaseController {

    constructor(
        @Adapter(TAXBASE_SERVICE)
        private readonly addTaxBaseService: ITaxBaseService
    ) { }

    @Post()
    async addTaxBaseController(@Body() data: ITaxBaseService.Params): Promise<ITaxBaseService.Result | ITaxBaseService.Exist | any> {
        const addTaxBase = await this.addTaxBaseService.addTaxBaseService(data);
        return { statusCode: 201, body: { message: 'TaxBase successfully registered.', addTaxBase } }
    }
}
