import { PermisoEntity } from '../../entities';
import { PermisoRepository } from '../../repository';

export interface GetAllPermisoUseCase {
    execute(): Promise<PermisoEntity[]>;
}

export class GetAllPermisos implements GetAllPermisoUseCase {
    constructor(private readonly repository: PermisoRepository) {}
    async execute(): Promise<PermisoEntity[]> {
        return this.repository.getAll();
    }
}
