import { TipoPermisoDatasource } from '../../domain/datasources';
import { CreateTipoPermisoDto, UpdateTipoPermisoDto } from '../../domain/dtos';
import { TipoPermisoEntity } from '../../domain/entities';
import { TipoPermisoRepository } from '../../domain/repository';

export class TipoPermisoRepositoryImpl implements TipoPermisoRepository {
    constructor(private readonly datasource: TipoPermisoDatasource) {}

    create(createTipoPermisoDto: CreateTipoPermisoDto): Promise<TipoPermisoEntity> {
        return this.datasource.create(createTipoPermisoDto);
    }
    getAll(): Promise<TipoPermisoEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<TipoPermisoEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateTipoPermisoDto: UpdateTipoPermisoDto): Promise<TipoPermisoEntity> {
        return this.datasource.updateById(updateTipoPermisoDto);
    }
    deleteBy(id: number): Promise<TipoPermisoEntity> {
        return this.datasource.deleteBy(id);
    }
}
