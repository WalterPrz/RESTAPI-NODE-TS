import { CreateTipoPermisoDto, UpdateTipoPermisoDto } from '../dtos';
import { TipoPermisoEntity } from '../entities';

export abstract class TipoPermisoDatasource {
    abstract create(createTipoPermisoDto: CreateTipoPermisoDto): Promise<TipoPermisoEntity>;
    //todo: paginacion
    abstract getAll(): Promise<TipoPermisoEntity[]>;
    abstract findById(id: number): Promise<TipoPermisoEntity>;
    abstract updateById(updateTipoPermisoDto: UpdateTipoPermisoDto): Promise<TipoPermisoEntity>;
    abstract deleteBy(id: number): Promise<TipoPermisoEntity>;
}
