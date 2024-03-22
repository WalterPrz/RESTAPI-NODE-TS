import { AddPermisoRolDto } from '../../dtos';
import { PermisoRolEntity } from '../../entities';
import { CustomError } from '../../errors/Custom.error';
import { PermisoRolRepository } from '../../repository';

export interface AddPermisoRolUseCase {
    execute(dto: AddPermisoRolDto): Promise<PermisoRolEntity>;
}
export class AddPermisoRol implements AddPermisoRolUseCase {
    constructor(private readonly repository: PermisoRolRepository) {}
    async execute(dto: AddPermisoRolDto): Promise<PermisoRolEntity> {
        const existe = await this.repository.find(dto.id_permiso, dto.id_rol);
        if (existe) {
            throw CustomError.UnprocessableEntity(`Ya existe este permiso asociado con este rol`);
        }
        return this.repository.add(dto);
    }
}
