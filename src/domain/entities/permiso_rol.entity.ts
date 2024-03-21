import { PermisoEntity } from './permiso.entity';

export interface PermisoRolOptions {
    id_permiso: number;
    id_rol: number;
    Permiso?: PermisoEntity;
}

export class PermisoRolEntity {
    public id_permiso: number;
    public id_rol: number;
    public permisoEntity?: PermisoEntity;

    constructor(options: PermisoRolOptions) {
        const { id_permiso, id_rol, Permiso } = options;
        this.id_permiso = id_permiso;
        this.id_rol = id_rol;
        this.permisoEntity = Permiso;
    }

    public static fromObject(object: { [key: string]: any }): PermisoRolEntity {
        const { id_permiso, id_rol, Permiso } = object;
        if (!id_permiso) throw Error('Id permiso is required');
        if (!id_rol) throw Error('id rol is required');
        let permisoEntity;
        if (Permiso) {
            permisoEntity = PermisoEntity.fromObject(Permiso);
        }
        return new PermisoRolEntity({ id_permiso, id_rol, Permiso: permisoEntity });
    }
    public static fromJson(json: string): PermisoRolEntity {
        json = json === '' ? '{}' : json;
        const { id_permiso, id_rol } = JSON.parse(json);
        if (!id_permiso) throw Error('Id permiso is required');
        if (!id_rol) throw Error('id rol is required');
        return new PermisoRolEntity({ id_permiso, id_rol });
    }
}
