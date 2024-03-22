import { CreateRolDto } from '../../dtos';
import { RolEntity } from '../../entities';
import { CustomError } from '../../errors/Custom.error';
import { RolRepository } from '../../repository';

export interface CreateRolUseCase {
    execute(dto: CreateRolDto): Promise<RolEntity>;
}

export class CreateRol implements CreateRolUseCase {
    constructor(private readonly repository: RolRepository) {}
    async execute(dto: CreateRolDto): Promise<RolEntity> {
        const existeNombre = await this.repository.findByName(dto.nombre, null);
        if (existeNombre) throw CustomError.UnprocessableEntity(`Este nombre ya existe: ${dto.nombre}`);
        return this.repository.create(dto);
    }
}
