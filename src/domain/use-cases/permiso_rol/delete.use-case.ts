import { DeletePermisoRolDto } from '../../dtos';
import { PermisoRolEntity } from '../../entities';
import { CustomError } from '../../errors/Custom.error';
import { PermisoRolRepository } from '../../repository';

export interface DeletePermisoRolUseCase {
    execute(dto: DeletePermisoRolDto): Promise<PermisoRolEntity>;
}
export class DeletePermisoRol implements DeletePermisoRolUseCase {
    constructor(private readonly repository: PermisoRolRepository) {}
    async execute(dto: DeletePermisoRolDto): Promise<PermisoRolEntity> {
        const existe = await this.repository.find(dto.id_permiso, dto.id_rol);
        if (!existe) {
            throw CustomError.UnprocessableEntity(`No existe el permiso asociado con este rol`);
        }
        return this.repository.delete(dto);
    }
}
