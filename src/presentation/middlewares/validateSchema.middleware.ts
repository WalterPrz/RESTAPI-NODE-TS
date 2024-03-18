import { NextFunction, Request, Response } from 'express';
import { JsonSchemaV } from '../../config/plugins/ajv.plugin';
import { CustomError } from '../../domain/errors/Custom.error';

export class SchemaMiddleware {
    constructor() {}

    static verify(schema: { [key: string]: any }) {
        const schemaValidator = new JsonSchemaV();
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const { isValid, errors } = schemaValidator.validateSchema(schema, { ...req.body });
                if (isValid) return next();
                let firstError = ''
                if (Array.isArray(errors)) {
                    for (const item of errors) {
                        firstError =  item.message
                    }
                }
                next(CustomError.UnprocessableEntity(firstError));
            } catch (error) {
                next(error);
            }
        };
    }
}
