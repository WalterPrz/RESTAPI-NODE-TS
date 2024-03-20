export class CreatePermisoDto {
    private constructor(public readonly nombre: string, public readonly id_tipo_permiso:number) {}
    static create(proprs: { [key: string]: any }): CreatePermisoDto {
        const { nombre, id_tipo_permiso } = proprs;
        if(!nombre)  throw new Error('El nombre es obligatorio');
        if (nombre.trim() === '') {
            throw new Error('El nombre no puede ser una cadena vacia');
        }
        if (!id_tipo_permiso || isNaN(Number(id_tipo_permiso)) || id_tipo_permiso <= 0) {
            throw new Error('El id_tipo_permiso tiene que ser mayor a 0');
        }
        return new CreatePermisoDto(nombre.trim(), id_tipo_permiso);
    }
}
