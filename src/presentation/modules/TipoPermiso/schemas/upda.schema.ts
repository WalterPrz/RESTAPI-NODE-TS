import { JSONSchemaType } from 'ajv';

export interface UpdateTipoPermiso {
    nombre?: string;
}

export const SchemaUpdateTipoPermiso: JSONSchemaType<UpdateTipoPermiso> = {
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
    errorMessage: {},
};
