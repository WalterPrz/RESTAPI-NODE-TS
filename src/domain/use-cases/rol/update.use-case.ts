import { UpdateRolDto } from '../../dtos';
import { RolEntity } from '../../entities';
import { RolRepository } from '../../repository';

export interface UpdateByIdRolUseCase {
    execute(dto: UpdateRolDto): Promise<RolEntity>;
}
export class UpdateByIdRol implements UpdateByIdRolUseCase {
    constructor(private readonly repository: RolRepository) {}
    execute(dto: UpdateRolDto): Promise<RolEntity> {
        return this.repository.updateById(dto);
    }
}
