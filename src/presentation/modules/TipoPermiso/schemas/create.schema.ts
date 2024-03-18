import { JSONSchemaType } from 'ajv';

export interface CreateTipoPermiso {
    nombre: string;
}

export const SchemaCreateTipoPermiso: JSONSchemaType<CreateTipoPermiso> = {
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
            errorMessage: {
                type: 'El nombre debe ser de tipo string',
            },
        },
    },
    required: ['nombre'],
    errorMessage: {
        required: {
            nombre: 'nombre es obligatorio',
        },
    },
};
