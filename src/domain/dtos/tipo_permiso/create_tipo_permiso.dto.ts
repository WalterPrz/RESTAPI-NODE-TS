export class CreateTipoPermisoDto {
    private constructor(public readonly nombre: string) {}
    static create(proprs: { [key: string]: any }): CreateTipoPermisoDto {
        const { nombre } = proprs;
        if(!nombre)  throw new Error('El nombre es obligatorio');
        if (nombre.trim() === '') {
            throw new Error('El nombre no puede ser una cadena vacia');
        }
        return new CreateTipoPermisoDto(nombre);
    }
}
