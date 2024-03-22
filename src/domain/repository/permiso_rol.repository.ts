import { AddPermisoRolDto, DeletePermisoRolDto } from '../dtos';
import { PermisoRolEntity } from '../entities';

export abstract class PermisoRolRepository {
    abstract find(id_permiso: number, id_rol: number): Promise<PermisoRolEntity | null>;
    abstract add(addPermisoRolDto: AddPermisoRolDto): Promise<PermisoRolEntity>;
    abstract delete(DeletePermisoRolDto: DeletePermisoRolDto): Promise<PermisoRolEntity>;
}
