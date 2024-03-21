export class CreateRolDto {
    private constructor(
        public readonly nombre: string,
        public readonly permisos: number[],
    ) {}
    static create(props: { [key: string]: any }) {
        const { nombre, permisos = [] } = props;
        if (!nombre) throw new Error('El nombre es obligatorio');
        if (nombre.trim() === '') {
            throw new Error('El nombre no puede ser una cadena vacia');
        }
        if (!Array.isArray(permisos)) {
            throw new Error('Permisos tiene que ser un array');
        }
        for (const item of permisos) {
            if (isNaN(Number(item))) {
                throw new Error(`Los items de la lista de permisos deben ser números:${item}`);
            }
            if (Number(item) <= 0) {
                throw new Error(`El item de la lista de permiso debe ser mayor a 0 ${item}`);
            }
        }
        return new CreateRolDto(nombre, permisos);
    }
}