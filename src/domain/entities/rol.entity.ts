export interface RolOptions {
    id: number;
    nombre: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class RolEntity {
    public readonly id: number;
    public nombre: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(options: RolOptions) {
        const { id, nombre, createdAt, updatedAt } = options;
        this.id = id;
        this.nombre = nombre;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static fromObject(object: { [key: string]: any }): RolEntity {
        const { id, nombre, createdAt, updatedAt } = object;
        if (!id) throw 'Id is required';
        if (!nombre) throw 'Nombre is required';
        return new RolEntity({ id, nombre, createdAt, updatedAt });
    }
    public static fromJson(json: string): RolEntity {
        json = json === '' ? '{}' : json;
        const { id, nombre, createdAt, updatedAt } = JSON.parse(json);
        if (!id) throw 'Id is required';
        if (!nombre) throw 'Nombre is required';
        return new RolEntity({ id, nombre, createdAt, updatedAt });
    }
}
