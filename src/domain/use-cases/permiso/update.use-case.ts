import { UpdatePermisoDto } from '../../dtos';
import { PermisoEntity } from '../../entities';
import { PermisoRepository } from '../../repository';

export interface UpdateByIdPermisoUseCase {
    execute(dto: UpdatePermisoDto): Promise<PermisoEntity>;
}
export class UpdateByIdPermiso implements UpdateByIdPermisoUseCase {
    constructor(private readonly repository: PermisoRepository) {}
    execute(dto: UpdatePermisoDto): Promise<PermisoEntity> {
        return this.repository.updateById(dto);
    }
}
