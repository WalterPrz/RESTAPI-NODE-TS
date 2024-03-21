import { CreateRolDto, UpdateRolDto } from '../dtos';
import { RolEntity } from '../entities';

export abstract class RolDatasource {
    abstract create(createRolDto: CreateRolDto): Promise<RolEntity>;
    //todo: paginacion
    abstract getAll(): Promise<RolEntity[]>;
    abstract findById(id: number): Promise<RolEntity>;
    abstract updateById(updateRolDto: UpdateRolDto): Promise<RolEntity>;
    abstract deleteBy(id: number): Promise<RolEntity>;
}
