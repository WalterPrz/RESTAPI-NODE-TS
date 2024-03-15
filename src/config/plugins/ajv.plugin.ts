import Ajv, { ErrorObject, Schema } from 'ajv';

type ValidationResult = {
    isValid: boolean;
    errors: { [key: string]: any }[] | null;
};
export interface validatorJsonSchemaServide {
    validateSchema(schema: Schema, data: { [key: string]: any }): ValidationResult;
}
export class JsonSchemaV implements validatorJsonSchemaServide {
    private ajv: Ajv;
    constructor() {
        this.ajv = new Ajv();
    }
    validateSchema(schema: Schema, data: { [key: string]: any }): ValidationResult {
        const validate = this.ajv.compile(schema);
        const isValid = validate(data);
        return {
            isValid,
            errors: isValid ? [] : validate.errors ?? [{ error: 'Ocurrio un error al momento de validar un schema' }],
        };
    }
}
