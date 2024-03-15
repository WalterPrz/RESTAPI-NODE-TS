export interface TipoPermisoOptions {
    id: number;
    nombre: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class TipoPermisoEntity {
    public readonly id: number;
    public nombre: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(options: TipoPermisoOptions) {
        const { id, nombre, createdAt, updatedAt } = options;
        this.id = id;
        this.nombre = nombre;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static fromObject(object: { [key: string]: any }): TipoPermisoEntity {
        const { id, nombre, createdAt, updatedAt } = object;
        if (!id) throw 'Id is required';
        if (!nombre) throw 'Nombre is required';
        return new TipoPermisoEntity({ id, nombre, createdAt, updatedAt });
    }
    public static fromJson(json: string): TipoPermisoEntity {
        json = json === '' ? '{}' : json;
        const { id, nombre, createdAt, updatedAt } = JSON.parse(json);
        if (!id) throw 'Id is required';
        if (!nombre) throw 'Nombre is required';
        return new TipoPermisoEntity({ id, nombre, createdAt, updatedAt });
    }
}
