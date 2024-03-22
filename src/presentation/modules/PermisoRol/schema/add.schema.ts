import { JSONSchemaType } from 'ajv';
import { prisma } from '../../../../data/postgres';

export interface AddPermisRol {
    id_rol: number;
    id_permiso: number;
}

export const SchemaAddPermisoRol: JSONSchemaType<AddPermisRol> = {
    $async: true,
    type: 'object',
    properties: {
        id_rol: {
            type: 'number',
            idExists: {
                getModel: () => {
                    return prisma.rol;
                },
            },
            errorMessage: {
                type: 'El id rol debe ser de tipo int',
                idExists: 'El id rol no existe en roles',
            },
        },
        id_permiso: {
            type: 'number',
            idExists: {
                getModel: () => {
                    return prisma.permiso;
                },
            },
            errorMessage: {
                type: 'El id permiso debe ser de tipo int',
                idExists: 'El id permiso no existe en permisos',
            },
        },
    },
    required: ['id_rol', 'id_permiso'],
    errorMessage: {
        required: {
            id_rol: 'Id rol es obligatorio',
            id_permiso: 'Id permiso es obligatorio',
        },
    },
};
