import { PermisoDatasource } from '../../domain/datasources';
import { CreatePermisoDto, UpdatePermisoDto } from '../../domain/dtos';
import { PermisoEntity } from '../../domain/entities';
import { PermisoRepository } from '../../domain/repository';

export class PermisoRepositoryImpl implements PermisoRepository {
    constructor(private readonly datasource: PermisoDatasource) {}
    create(createPermisoDto: CreatePermisoDto): Promise<PermisoEntity> {
        return this.datasource.create(createPermisoDto);
    }
    getAll(): Promise<PermisoEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<PermisoEntity> {
        return this.datasource.findById(id);
    }
    updateById(updatePermisoDto: UpdatePermisoDto): Promise<PermisoEntity> {
        return this.datasource.updateById(updatePermisoDto);
    }
    deleteBy(id: number): Promise<PermisoEntity> {
        return this.datasource.deleteBy(id);
    }
}
