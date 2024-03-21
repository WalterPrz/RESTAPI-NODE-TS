import { JSONSchemaType } from 'ajv';
import { prisma } from '../../../../data/postgres';

export interface CreateRol {
    nombre: string;
    permisos?: number[];
}

export const SchemaCreateRol: JSONSchemaType<CreateRol> = {
    $async: true,
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
            errorMessage: {
                type: 'El nombre debe ser de tipo string',
            },
        },
        permisos: {
            type: 'array',
            nullable: true,
            uniqueItems: true,
            items: {
                type: 'integer',
                minimum: 1,
                idExists: {
                    getModel: () => {
                        return prisma.permiso;
                    },
                },
                errorMessage: {
                    type: 'Los items de la lista permisos deben ser de tipo número',
                    minimum: 'Los items de la lista permisos deben ser mayor a cero',
                    idExists: 'Los items de la lista permisos deben deben existir',
                },
            },
            errorMessage: {
                type: 'Los permisos deben ser un lista (array)',
                uniqueItems: 'Los items de la lista permisos deben ser unicos',
            },
        },
    },
    required: ['nombre'],
    errorMessage: {
        required: {
            nombre: 'Nombre es obligatorio',
        },
    },
};
