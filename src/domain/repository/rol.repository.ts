import { CreateRolDto, UpdateRolDto } from '../dtos';
import { RolEntity } from '../entities';

export abstract class RolRepository {
    abstract create(createRolDto: CreateRolDto): Promise<RolEntity>;
    //todo: paginacion
    abstract getAll(): Promise<RolEntity[]>;
    abstract findById(id: number): Promise<RolEntity>;
    abstract updateById(updateRolDto: UpdateRolDto): Promise<RolEntity>;
    abstract deleteBy(id: number): Promise<RolEntity>;
    abstract findByName(name: string, idIgnore: number | null ): Promise<{[key:string]:any} | null>;
}
