import { TipoPermisoEntity } from './tipo_permiso.entity';

export interface PermisoOptions {
    id: number;
    nombre: string;
    id_tipo_permiso: number;
    tipoPermisoEntity?: TipoPermisoEntity;
    createdAt?: Date;
    updatedAt?: Date;
}

export class PermisoEntity {
    public id: number;
    public nombre: string;
    public id_tipo_permiso: number;
    public tipoPermiso?: TipoPermisoEntity;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(options: PermisoOptions) {
        const { id, nombre, id_tipo_permiso, createdAt, updatedAt, tipoPermisoEntity } = options;
        this.id = id;
        this.nombre = nombre;
        this.id_tipo_permiso = id_tipo_permiso;
        this.tipoPermiso = tipoPermisoEntity;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static fromObject(object: { [key: string]: any }): PermisoEntity {
        const { id, nombre, id_tipo_permiso, createdAt, updatedAt, Tipo_Permiso } = object;
        if (!id) throw Error('Id is required');
        if (!nombre) throw Error('Nombre is required');
        if (!id_tipo_permiso) throw Error('id_tipo_permiso is required');
        const options: PermisoOptions = {
            id,
            nombre,
            createdAt,
            id_tipo_permiso,
            updatedAt,
        };
        if (Tipo_Permiso) {
            options.tipoPermisoEntity = TipoPermisoEntity.fromObject(Tipo_Permiso);
        }
        return new PermisoEntity(options);
    }
    public static fromJson(json: string): PermisoEntity {
        json = json === '' ? '{}' : json;
        const { id, nombre, id_tipo_permiso, createdAt, updatedAt } = JSON.parse(json);
        if (!id) throw Error('Id is required');
        if (!nombre) throw Error('Nombre is required');
        if (!id_tipo_permiso) throw Error('Nombre is required');
        return new PermisoEntity({
            id,
            nombre,
            createdAt,
            id_tipo_permiso,
            updatedAt,
        });
    }
}
