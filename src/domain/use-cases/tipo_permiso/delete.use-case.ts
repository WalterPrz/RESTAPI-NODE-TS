import { TipoPermisoEntity } from '../../entities';
import { TipoPermisoRepository } from '../../repository';

export interface DeleteTipoPermisoUseCase {
    execute(id: number): Promise<TipoPermisoEntity>;
}

export class deleteById implements DeleteTipoPermisoUseCase {
    constructor(private readonly repository: TipoPermisoRepository) {}
    async execute(id: number): Promise<TipoPermisoEntity> {
        return this.repository.deleteBy(id);
    }
}
