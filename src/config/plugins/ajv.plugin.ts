import Ajv, { ErrorObject, Schema } from 'ajv';
import AjvErrors from 'ajv-errors';
import { prisma } from '../../data/postgres';
type ValidationResult = {
    isValid: boolean;
    errors: { [key: string]: any }[] | null;
};
export interface validatorJsonSchemaServide {
    validateSchema(schema: Schema, data: { [key: string]: any }): ValidationResult;
    validateIdExist(data: {[key:string]:any}, value: any): Promise<boolean>;
}
export class JsonSchemaV implements validatorJsonSchemaServide {
    private ajv: Ajv;

    constructor() {
        this.ajv = new Ajv({ allErrors: true });
        this.ajv.addKeyword({
            keyword: 'idExists',
            $dataError: {
                message: 'Mensaje de error del id no existe.',
            },
            async: true,
            type: 'number',
            validate: this.validateIdExist,
        });
        this.initErrorMessages();
    }
    async validateIdExist(data: {[key:string]:any}, value: any) {
        const existe = await data.model.findUnique({
            where: { id: value },
        });
        return !!existe;
    }
    validateSchema(schema: Schema, data: { [key: string]: any }): ValidationResult {
        const validate = this.ajv.compile(schema);
        const isValid = validate(data);
        return {
            isValid,
            errors: isValid ? [] : validate.errors ?? [{ error: 'Ocurrio un error al momento de validar un schema' }],
        };
    }
    private initErrorMessages() {
        AjvErrors(this.ajv);
    }
}
