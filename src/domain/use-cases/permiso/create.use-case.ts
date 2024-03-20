import { CreatePermisoDto } from '../../dtos';
import { PermisoEntity } from '../../entities';
import { PermisoRepository } from '../../repository';

export interface CreatePermisoUseCase {
    execute(dto: CreatePermisoDto): Promise<PermisoEntity>;
}

export class CreatePermiso implements CreatePermisoUseCase {
    constructor(private readonly repository: PermisoRepository) {}
    async execute(dto: CreatePermisoDto): Promise<PermisoEntity> {
        return this.repository.create(dto);
    }
}