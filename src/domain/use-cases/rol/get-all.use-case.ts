import { RolEntity } from '../../entities';
import { RolRepository } from '../../repository';

export interface GetAllRolUseCase {
    execute(): Promise<RolEntity[]>;
}

export class GetAllRols implements GetAllRolUseCase {
    constructor(private readonly repository: RolRepository) {}
    async execute(): Promise<RolEntity[]> {
        return this.repository.getAll();
    }
}
