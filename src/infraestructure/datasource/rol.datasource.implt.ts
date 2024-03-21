import { prisma } from '../../data/postgres';
import { RolDatasource } from '../../domain/datasources';
import { CreateRolDto, UpdateRolDto } from '../../domain/dtos';
import { RolEntity } from '../../domain/entities';
import { CustomError } from '../../domain/errors/Custom.error';

export class RolDatasourceImpl implements RolDatasource {
    async create(createRolDto: CreateRolDto): Promise<RolEntity> {
        const existeNombre = await this.findByName(createRolDto.nombre);
        if (existeNombre) throw CustomError.UnprocessableEntity(`Este nombre ya existe: ${createRolDto.nombre}`);
        const data = await prisma.rol.create({
            data: {
                nombre: createRolDto.nombre,
                permisos: {
                    create: createRolDto.permisos.map((item) => {
                        return {
                            id_permiso: item,
                        };
                    }),
                },
            },
            include: {
                permisos: true,
            },
        });
        return RolEntity.fromObject(data);
    }
    async getAll(): Promise<RolEntity[]> {
        const data = await prisma.rol.findMany({
            include: {
                permisos: {
                    include: {
                        Permiso: true,
                    },
                },
            },
        });
        return data.map((item) => RolEntity.fromObject(item));
    }
    async findById(id: number): Promise<RolEntity> {
        const data = await prisma.rol.findUnique({
            include: {
                permisos: true,
            },
            where: {
                id,
            },
        });
        if (!data) throw CustomError.NotFound(`No se encontro el rol con id: ${id}`);
        return RolEntity.fromObject(data);
    }
    async updateById(updateRolDto: UpdateRolDto): Promise<RolEntity> {
        await this.findById(updateRolDto.id);
        const dataToUpdate = updateRolDto.value;
        if (dataToUpdate.nombre) {
            const existeNombre = await this.findByName(dataToUpdate.nombre, updateRolDto.id);
            if (existeNombre) throw CustomError.UnprocessableEntity(`Este nombre ya existe: ${updateRolDto.nombre}`);
        }
        const data = await prisma.rol.update({
            data: dataToUpdate,
            where: {
                id: updateRolDto.id,
            },
        });
        return RolEntity.fromObject(data);
    }
    async deleteBy(id: number): Promise<RolEntity> {
        const existeRelacion = await prisma.permisosRols.findFirst({
            where: {
                id_rol: id,
            },
        });
        if (existeRelacion) throw CustomError.UnprocessableEntity(`Existe permisos relacionados con este rol: ${id}`);
        await this.findById(id);
        const data = await prisma.rol.delete({
            where: { id },
        });
        return RolEntity.fromObject(data);
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
        const data = await prisma.rol.findFirst({
            where,
        });
        if (data) return true;
        return false;
    }
}
