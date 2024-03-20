import { prisma } from '../../data/postgres';
import { PermisoDatasource } from '../../domain/datasources';
import { CreatePermisoDto, UpdatePermisoDto } from '../../domain/dtos';
import { PermisoEntity } from '../../domain/entities';
import { CustomError } from '../../domain/errors/Custom.error';

export class PermisoDatasourceImpl implements PermisoDatasource {
    async create(createPermisoDto: CreatePermisoDto): Promise<PermisoEntity> {
        const existeNombre = await this.findByName(createPermisoDto.nombre);
        if (existeNombre) throw CustomError.UnprocessableEntity(`Este nombre ya existe: ${createPermisoDto.nombre}`);
        const data = await prisma.permiso.create({
            data: createPermisoDto,
        });
        return PermisoEntity.fromObject(data);
    }
    async getAll(): Promise<PermisoEntity[]> {
        const data = await prisma.permiso.findMany({
            include:{
                Tipo_Permiso:true
            }
        });
        console.log(data)
        return data.map((item) => PermisoEntity.fromObject(item));
    }
    async findById(id: number): Promise<PermisoEntity> {
        const data = await prisma.permiso.findUnique({
            where: {
                id,
            },
        });
        if (!data) throw CustomError.NotFound(`No se encontro el permiso con id: ${id}`);
        return PermisoEntity.fromObject(data);
    }
    async updateById(updatePermisoDto: UpdatePermisoDto): Promise<PermisoEntity> {
        await this.findById(updatePermisoDto.id);
        const dataToUpdate = updatePermisoDto.value;
        if(dataToUpdate.nombre){
            const existeNombre = await this.findByName(dataToUpdate.nombre, updatePermisoDto.id);
            if (existeNombre) throw CustomError.UnprocessableEntity(`Este nombre ya existe: ${dataToUpdate.nombre}`);
        }
        const data = await prisma.permiso.update({
            data: dataToUpdate,
            where: {
                id: updatePermisoDto.id,
            },
        });
        return PermisoEntity.fromObject(data);
    }
    async deleteBy(id: number): Promise<PermisoEntity> {
        await this.findById(id);
        const data = await prisma.permiso.delete({
            where: { id },
        });
        return PermisoEntity.fromObject(data);
    }
    private async findByName(name: string, idIgnore: number | null = null): Promise<boolean> {
        const where: any = {
            nombre: name,
        };
        if (idIgnore) {
            where.id = {
                not: idIgnore,
            };
        }
        const data = await prisma.permiso.findFirst({
            where,
        });
        if (data) return true;
        return false;
    }
}
