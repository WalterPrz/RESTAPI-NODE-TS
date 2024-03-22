import { PermisoRolDatasource } from '../../domain/datasources';
import { AddPermisoRolDto, DeletePermisoRolDto } from '../../domain/dtos';
import { PermisoRolEntity } from '../../domain/entities';
import { PermisoRolRepository } from '../../domain/repository';

export class PermisoRolRepositoryImpl implements PermisoRolRepository {
    constructor(private readonly datasource: PermisoRolDatasource) {}
    find(id_permiso: number, id_rol: number): Promise<PermisoRolEntity | null> {
        return this.datasource.find(id_permiso, id_rol);
    }
    add(addPermisoRolDto: AddPermisoRolDto): Promise<PermisoRolEntity> {
        return this.datasource.add(addPermisoRolDto);
    }
    delete(deletePermisoRolDto: DeletePermisoRolDto): Promise<PermisoRolEntity> {
        return this.datasource.delete(deletePermisoRolDto);
    }
}
