import { TipoPermisoEntity } from '../../entities';
import { TipoPermisoRepository } from '../../repository';

export interface GetAllTipoPermisoUseCase {
    execute(): Promise<TipoPermisoEntity[]>;
}

export class GetTodos implements GetAllTipoPermisoUseCase {
    constructor(private readonly repository: TipoPermisoRepository) {}
    async execute(): Promise<TipoPermisoEntity[]> {
        return this.repository.getAll();
    }
}
