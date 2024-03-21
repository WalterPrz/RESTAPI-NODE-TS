export class UpdateRolDto {
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
    ) {}

    get value() {
        const object: { [key: string]: any } = {};
        if (this.nombre) object.nombre = this.nombre;
        return object;
    }
    static create(props: { [key: string]: any }) {
        const { nombre, id } = props;

        if (!id || isNaN(Number(id)) || id <= 0) {
            throw new Error('Id is not a valid number');
        }

        return new UpdateRolDto(id, nombre);
    }
}
