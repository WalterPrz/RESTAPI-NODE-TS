export class UpdateTipoPermisoDto {
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
    ) {}
    get value() {
        const returnObject: { [key: string]: any } = {};
        if (this.nombre) returnObject.nombre = this.nombre;
        return returnObject;
    }
    static create(props: { [key: string]: any }): UpdateTipoPermisoDto {
        const { id, nombre } = props;
        if (!id || isNaN(Number(id)) || id <= 0) {
            throw new Error('id is not a valid number');
        }
        return new UpdateTipoPermisoDto(id, nombre);
    }
}
