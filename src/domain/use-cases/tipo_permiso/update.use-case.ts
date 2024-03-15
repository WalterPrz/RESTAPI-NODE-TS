import { UpdateTipoPermisoDto } from '../../dtos';
import { TipoPermisoEntity } from '../../entities';
import { TipoPermisoRepository } from '../../repository';

export interface UpdateTipoPermisoUseCase {
    execute(dto: UpdateTipoPermisoDto): Promise<TipoPermisoEntity>;
}

export class updateById implements UpdateTipoPermisoUseCase {
    constructor(private readonly repository: TipoPermisoRepository) {}
    async execute(dto: UpdateTipoPermisoDto): Promise<TipoPermisoEntity> {
        return this.repository.updateById(dto)
    }
}
