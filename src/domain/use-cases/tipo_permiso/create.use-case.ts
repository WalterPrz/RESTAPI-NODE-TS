import { CreateTipoPermisoDto } from '../../dtos';
import { TipoPermisoEntity } from '../../entities';
import { TipoPermisoRepository } from '../../repository';

export interface CreateTipoPermisoUseCase {
    execute(dto: CreateTipoPermisoDto): Promise<TipoPermisoEntity>;
}

export class Create implements CreateTipoPermisoUseCase {
    constructor(private readonly repository: TipoPermisoRepository) {}
    async execute(dto: CreateTipoPermisoDto): Promise<TipoPermisoEntity> {
        return this.repository.create(dto);
    }
}
