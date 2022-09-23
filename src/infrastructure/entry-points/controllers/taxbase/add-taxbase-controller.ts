import { ADD_TAXBASE_SERVICE, IAddTaxBaseService } from "@/domain/use-cases/taxbase/dto/add-taxbase-dto";
// import { ValidateFields } from "@/infrastructure/helpers/validate-fields";
import { Adapter, Body, Mapping, Post } from "@tsclean/core";
import { taxBaseParams } from "@/domain/entities/taxbase";

@Mapping('api/v1/taxbases')
export class AddTaxBaseController {

    constructor(
        @Adapter(ADD_TAXBASE_SERVICE)
        private readonly addTaxBaseService: IAddTaxBaseService
    ) { }

    @Post()
    async addTaxBaseController(@Body() data: taxBaseParams): Promise<IAddTaxBaseService.Result | IAddTaxBaseService.Exist | any> {
        // const { errors, isValid } = ValidateFields.fieldsValidation(data);
        // if (!isValid) return { statusCode: 422, body: { "message": errors } }
        const addTaxBase = await this.addTaxBaseService.addTaxBaseService(data);
        return { statusCode: 201, body: { message: 'TaxBase successfully registered.', addTaxBase } }
    }
}
