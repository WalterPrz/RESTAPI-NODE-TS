import { RolEntity } from '../../entities';
import { RolRepository } from '../../repository';

export interface GetOneRolUseCase {
    execute(id: number): Promise<RolEntity>;
}

export class GetOneRol implements GetOneRolUseCase {
    constructor(private readonly repository: RolRepository) {}
    execute(id: number): Promise<RolEntity> {
        return this.repository.findById(id);
    }
}
