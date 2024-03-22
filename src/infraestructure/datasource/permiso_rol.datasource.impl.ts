import { prisma } from '../../data/postgres';
import { PermisoRolDatasource } from '../../domain/datasources';
import { AddPermisoRolDto, DeletePermisoRolDto } from '../../domain/dtos';
import { PermisoRolEntity } from '../../domain/entities';

export class PermisoRolDatasourceImpl implements PermisoRolDatasource {
    async find(id_permiso: number, id_rol: number): Promise<PermisoRolEntity | null> {
        const data = await prisma.permisosRols.findFirst({
            where: {
                id_permiso: id_permiso,
                id_rol: id_rol,
            },
        });
        if (!data) return null;
        return PermisoRolEntity.fromObject(data);
    }
    async add(addPermisoRolDto: AddPermisoRolDto): Promise<PermisoRolEntity> {
        const data = await prisma.permisosRols.create({
            data: {
                id_permiso: addPermisoRolDto.id_permiso,
                id_rol: addPermisoRolDto.id_rol,
            },
        });
        return PermisoRolEntity.fromObject(data);
    }
    async delete(deletePermisoRolDto: DeletePermisoRolDto): Promise<PermisoRolEntity> {
        const data = await prisma.permisosRols.delete({
            where: {
                id_permiso_id_rol: { id_permiso: deletePermisoRolDto.id_permiso, id_rol: deletePermisoRolDto.id_rol },
            },
        });
        return PermisoRolEntity.fromObject(data);
    }
}
