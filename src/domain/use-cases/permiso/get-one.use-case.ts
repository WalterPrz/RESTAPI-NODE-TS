import { PermisoEntity } from '../../entities';
import { PermisoRepository } from '../../repository';

export interface GetOnePermisoUseCase {
    execute(id: number): Promise<PermisoEntity>;
}

export class GetOnePermiso implements GetOnePermisoUseCase {
    constructor(private readonly repository: PermisoRepository) {}
    execute(id: number): Promise<PermisoEntity> {
        return this.repository.findById(id);
    }
}
