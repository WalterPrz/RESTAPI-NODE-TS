import { CreateRolDto } from '../../dtos';
import { RolEntity } from '../../entities';
import { RolRepository } from '../../repository';

export interface CreateRolUseCase {
    execute(dto: CreateRolDto): Promise<RolEntity>;
}

export class CreateRol implements CreateRolUseCase {
    constructor(private readonly repository: RolRepository) {}
    async execute(dto: CreateRolDto): Promise<RolEntity> {
        return this.repository.create(dto);
    }
}