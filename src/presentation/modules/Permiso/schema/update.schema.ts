import { JSONSchemaType } from 'ajv';
import { prisma } from '../../../../data/postgres';

export interface UpdatePermiso {
    nombre?: string;
    id_tipo_permiso?:number;
}

export const SchemaUpdatePermiso: JSONSchemaType<UpdatePermiso> = {
    type: 'object',
    $async:true,
    properties: {
        nombre: {
            type: 'string',
            nullable: true,
            errorMessage: {
                type: 'El nombre debe ser de tipo string',
            },
        },
        id_tipo_permiso: {
            type: 'number',
            nullable: true,
            idExists:{ getModel: ()=>{
                return prisma.tipo_Permiso
            }},
            errorMessage: {
                type: 'El id de tipo permiso debe ser de tipo número',
                idExists: 'El id no existe de tipo permiso.',
            },
        },
    },
    errorMessage: {},
};
