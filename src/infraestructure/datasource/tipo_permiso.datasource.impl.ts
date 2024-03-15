import { prisma } from '../../data/postgres';
import { TipoPermisoDatasource } from '../../domain/datasources';
import { CreateTipoPermisoDto, UpdateTipoPermisoDto } from '../../domain/dtos';
import { TipoPermisoEntity } from '../../domain/entities';
import { CustomError } from '../../domain/errors/Custom.error';

export class TipoPermisoDatasourceImpl implements TipoPermisoDatasource {
    async create(createTipoPermisoDto: CreateTipoPermisoDto): Promise<TipoPermisoEntity> {
        const tipoPermiso = await prisma.tipo_Permiso.create({
            data: createTipoPermisoDto,
        });
        return TipoPermisoEntity.fromObject(tipoPermiso);
    }
    async getAll(): Promise<TipoPermisoEntity[]> {
        const tipoPermisos = await prisma.tipo_Permiso.findMany();
        return tipoPermisos.map((item) => TipoPermisoEntity.fromObject(item));
    }
    async findById(id: number): Promise<TipoPermisoEntity> {
        const tipoPermiso = await prisma.tipo_Permiso.findUnique({ where: { id: id } });
        if (!tipoPermiso) throw CustomError.NotFound(`Tipo permiso ${id} no se encontró`);
        return TipoPermisoEntity.fromObject(tipoPermiso);
    }
    async updateById(updateTipoPermisoDto: UpdateTipoPermisoDto): Promise<TipoPermisoEntity> {
        await this.findById(updateTipoPermisoDto.id);
        const updateTipo = await prisma.tipo_Permiso.update({
            where: { id: updateTipoPermisoDto.id },
            data: updateTipoPermisoDto.value,
        });
        return TipoPermisoEntity.fromObject(updateTipo);
    }
    async deleteBy(id: number): Promise<TipoPermisoEntity> {
        await this.findById(id);
        const deleteTipoPermiso = await prisma.tipo_Permiso.delete({ where: { id: id } });
        return TipoPermisoEntity.fromObject(deleteTipoPermiso);
    }
}
