import { ITaxBaseService, TAXBASE_SERVICE } from "@/domain/use-cases/factory/Ifactory/Itaxbase";
// import { ValidateFields } from "@/infrastructure/helpers/validate-fields";
import { Adapter, Body, Mapping, Post } from "@tsclean/core";
import { taxBaseParams } from "@/domain/entities/taxbase";

@Mapping('api/v1/taxbases')
export class AddTaxBaseController {

    constructor(
        @Adapter(TAXBASE_SERVICE)
        private readonly addTaxBaseService: ITaxBaseService
    ) { }

    @Post()
    async addTaxBaseController(@Body() data: taxBaseParams): Promise<ITaxBaseService.Result | ITaxBaseService.Exist | any> {
        // const { errors, isValid } = ValidateFields.fieldsValidation(data);
        // if (!isValid) return { statusCode: 422, body: { "message": errors } }
        const addTaxBase = await this.addTaxBaseService.addTaxBaseService(data);
        return { statusCode: 201, body: { message: 'TaxBase successfully registered.', addTaxBase } }
    }
}
