import { JSONSchemaType } from 'ajv';

export interface CreateRol {
    nombre?: string;
}

export const SchemaUpdateRol: JSONSchemaType<CreateRol> = {
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
            nullable: true,
            errorMessage: {
                type: 'El nombre debe ser de tipo string',
            },
        },
    },
    errorMessage: {
        type: 'Formato de dody debe ser Json',
    },
};
