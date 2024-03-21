import { RolEntity } from "../../entities";
import { RolRepository } from "../../repository";

export interface DeleteRolUseCase {
    execute(id: number): Promise<RolEntity>;
}

export class DeleteRol implements DeleteRolUseCase {
    constructor(private readonly repository: RolRepository){
        
    }
    async execute(id: number): Promise<RolEntity> {
       return this.repository.deleteBy(id)
    }

}
