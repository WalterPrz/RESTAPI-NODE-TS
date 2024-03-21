import { RolDatasource } from '../../domain/datasources';
import { CreateRolDto, UpdateRolDto } from '../../domain/dtos';
import { RolEntity } from '../../domain/entities';
import { RolRepository } from '../../domain/repository';

export class RolRepositoryImpl implements RolRepository {
    constructor(private readonly datasource: RolDatasource) {}
    create(createRolDto: CreateRolDto): Promise<RolEntity> {
        return this.datasource.create(createRolDto);
    }
    getAll(): Promise<RolEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<RolEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateRolDto: UpdateRolDto): Promise<RolEntity> {
        return this.datasource.updateById(updateRolDto);
    }
    deleteBy(id: number): Promise<RolEntity> {
        return this.datasource.deleteBy(id);
    }
}
