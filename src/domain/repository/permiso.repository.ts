import { CreatePermisoDto, UpdatePermisoDto } from '../dtos';
import { PermisoEntity } from '../entities';

export abstract class PermisoRepository {
    abstract create(createPermisoDto: CreatePermisoDto): Promise<PermisoEntity>;
    //todo: paginacion
    abstract getAll(): Promise<PermisoEntity[]>;
    abstract findById(id: number): Promise<PermisoEntity>;
    abstract updateById(updatePermisoDto: UpdatePermisoDto): Promise<PermisoEntity>;
    abstract deleteBy(id: number): Promise<PermisoEntity>;
}
