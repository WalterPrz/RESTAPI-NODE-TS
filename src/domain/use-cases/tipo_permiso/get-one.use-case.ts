import { TipoPermisoEntity } from '../../entities';
import { TipoPermisoRepository } from '../../repository';

export interface GetOneTipoPermisoUseCase {
    execute(id:number): Promise<TipoPermisoEntity>;
}

export class GetOne implements GetOneTipoPermisoUseCase {
    constructor(private readonly repository: TipoPermisoRepository) {}
    async execute(id: number): Promise<TipoPermisoEntity> {
        return this.repository.findById(id);
    }
}
