import { prisma } from '../../data/postgres';
import { RolDatasource } from '../../domain/datasources';
import { CreateRolDto, UpdateRolDto } from '../../domain/dtos';
import { RolEntity } from '../../domain/entities';
import { CustomError } from '../../domain/errors/Custom.error';

export class RolDatasourceImpl implements RolDatasource {
    async create(createRolDto: CreateRolDto): Promise<RolEntity> {
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
        const dataToUpdate = updateRolDto.value;
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
    async findByName(name: string, idIgnore: number | null = null): Promise<{[key:string]:any} | null> {
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

        return data;
    }
}
