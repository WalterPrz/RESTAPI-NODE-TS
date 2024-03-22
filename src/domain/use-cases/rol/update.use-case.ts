import { UpdateRolDto } from '../../dtos';
import { RolEntity } from '../../entities';
import { CustomError } from '../../errors/Custom.error';
import { RolRepository } from '../../repository';

export interface UpdateByIdRolUseCase {
    execute(dto: UpdateRolDto): Promise<RolEntity>;
}
export class UpdateByIdRol implements UpdateByIdRolUseCase {
    constructor(private readonly repository: RolRepository) {}
    async execute(dto: UpdateRolDto): Promise<RolEntity> {
        await this.repository.findById(dto.id);
        if (dto.nombre) {
            const existeNombre = await this.repository.findByName(dto.value.nombre, dto.id);
            if (existeNombre) throw CustomError.UnprocessableEntity(`Este nombre ya existe: ${dto.value.nombre}`);
        }
        return this.repository.updateById(dto);
    }
}
