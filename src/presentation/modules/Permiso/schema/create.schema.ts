import { JSONSchemaType } from 'ajv';
import { prisma } from '../../../../data/postgres';

export interface CreatePermiso {
    nombre: string;
    id_tipo_permiso: number;
}

export const SchemaCreatePermiso: JSONSchemaType<CreatePermiso> = {
    $async:true,
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
            errorMessage: {
                type: 'El nombre debe ser de tipo string',
            },
        },
        id_tipo_permiso: {
            type: 'number',
            idExists:{ getModel: ()=>{
                return prisma.tipo_Permiso
            }},
            errorMessage: {
                type: 'El id de tipo permiso debe ser de tipo número',
                idExists: 'El id no existe de tipo permiso.',
            },
        },
    },
    required: ['nombre', 'id_tipo_permiso'],
    errorMessage: {
        required: {
            nombre: 'Nombre es obligatorio',
            id_tipo_permiso: 'Tipo permiso es obligatorio',
        },
    },
};
