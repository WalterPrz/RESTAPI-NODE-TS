export class DeletePermisoRolDto {
    private constructor(
        public readonly id_permiso: number,
        public readonly id_rol: number,
    ) {}

    public static create(props: { [key: string]: any }) {
        const { id_permiso, id_rol } = props;
        if (isNaN(Number(id_permiso))) {
            throw new Error(`Los items de la lista de permisos deben ser números:${id_permiso}`);
        }
        if (Number(id_permiso) <= 0) {
            throw new Error(`El item de la lista de permiso debe ser mayor a 0 ${id_permiso}`);
        }
        if (isNaN(Number(id_rol))) {
            throw new Error(`Los items de la lista de permisos deben ser números:${id_permiso}`);
        }
        if (Number(id_rol) <= 0) {
            throw new Error(`El item de la lista de permiso debe ser mayor a 0 ${id_permiso}`);
        }
        return new DeletePermisoRolDto(id_permiso, id_rol);
    }
}
