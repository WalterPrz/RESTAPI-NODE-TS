export class UpdatePermisoDto {
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
        public readonly id_tipo_permiso?: number,
    ) {}
    get value() {
        const returnObject: { [key: string]: any } = {};
        if (this.nombre) returnObject.nombre = this.nombre;
        if (this.id_tipo_permiso) returnObject.id_tipo_permiso = this.id_tipo_permiso;
        return returnObject;
    }
    static create(props: { [key: string]: any }): UpdatePermisoDto {
        const { id, nombre, id_tipo_permiso } = props;
        if (!id || isNaN(Number(id)) || id <= 0) {
            throw new Error('Id is not a valid number');
        }
        return new UpdatePermisoDto(id, nombre, id_tipo_permiso);
    }
}
