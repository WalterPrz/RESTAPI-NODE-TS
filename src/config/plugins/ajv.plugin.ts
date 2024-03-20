import Ajv, { ErrorObject, Schema, ValidationError } from 'ajv';
import AjvErrors from 'ajv-errors';
import { prisma } from '../../data/postgres';
import { rejects } from 'assert';
type ValidationResult = {
    isValid: boolean;
    errors: { [key: string]: any }[] | null;
};
export interface validatorJsonSchemaServide {
    validateSchema(schema: Schema, data: { [key: string]: any }): Promise<ValidationResult>;
    validateIdExist(data: { [key: string]: any }, value: any): Promise<boolean>;
}
export class JsonSchemaV implements validatorJsonSchemaServide {
    private ajv: Ajv;

    constructor() {
        this.ajv = new Ajv({ allErrors: true });

        this.ajv.addKeyword({
            keyword: 'idExists',
            errors: true,
            async: true,
            type: 'number',
            validate: this.validateIdExist,
        });
        this.initErrorMessages();
    }
    async validateIdExist(data: { [key: string]: any }, value: any) {
        try {
            const modelo = data.getModel();
            const existe = await modelo.findUnique({
                where: {
                    id: value,
                },
            });
            if (!existe) {
                return false;
            }
            return !!existe;
        } catch (e) {
            return false;
        }
    }
    async validateSchema(schema: Schema, data: { [key: string]: any }): Promise<ValidationResult> {
        const isAsync = Object.getOwnPropertyDescriptor(schema, '$async');
        const validate = this.ajv.compile(schema);
        if (isAsync) {
            try {
                await validate(data);
                return {
                    isValid: true,
                    errors: [],
                };
            } catch (e: any) {
                return {
                    isValid: false,
                    errors: e.errors ?? [{ error: 'Ocurrio un error al momento de validar un schema' }],
                };
            }
        } else {
            const isValid = validate(data);
            return {
                isValid: isValid,
                errors: isValid ? [] : validate.errors ?? [{ error: 'Ocurrio un error al momento de validar un schema' }],
            };
        }
    }
    private initErrorMessages() {
        AjvErrors(this.ajv);
    }
}
