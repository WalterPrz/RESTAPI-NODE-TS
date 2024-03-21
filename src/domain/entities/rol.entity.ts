import { PermisoEntity } from './permiso.entity';
import { PermisoRolEntity } from './permiso_rol.entity';

export interface RolOptions {
    id: number;
    nombre: string;
    permisosRol?: PermisoRolEntity[];
    createdAt?: Date;
    updatedAt?: Date;
}

export class RolEntity {
    public readonly id: number;
    public nombre: string;
    public permisosRolEntity?: PermisoRolEntity[];
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(options: RolOptions) {
        const { id, nombre, createdAt, updatedAt, permisosRol } = options;
        this.id = id;
        this.nombre = nombre;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.permisosRolEntity = permisosRol;
    }

    public static fromObject(object: { [key: string]: any }): RolEntity {
        const { id, nombre, createdAt, updatedAt, permisos } = object;
        if (!id) throw Error('Id is required');
        if (!nombre) throw Error('Nombre is required');
        let permisosArray;
        if (permisos) {
            permisosArray = permisos.map((item: { [key: string]: any }) => {
                return PermisoRolEntity.fromObject(item);
            });
        }
        return new RolEntity({ id, nombre, createdAt, updatedAt, permisosRol: permisosArray });
    }
    public static fromJson(json: string): RolEntity {
        json = json === '' ? '{}' : json;
        const { id, nombre, createdAt, updatedAt } = JSON.parse(json);
        if (!id) throw Error('Id is required');
        if (!nombre) throw Error('Nombre is required');
        return new RolEntity({ id, nombre, createdAt, updatedAt });
    }
}
