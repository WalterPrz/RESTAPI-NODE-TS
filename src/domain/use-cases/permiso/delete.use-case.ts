import { PermisoEntity } from "../../entities";
import { PermisoRepository } from "../../repository";

export interface DeletePermisoUseCase {
    execute(id: number): Promise<PermisoEntity>;
}

export class DeletePermiso implements DeletePermisoUseCase {
    constructor(private readonly repository: PermisoRepository){
        
    }
    async execute(id: number): Promise<PermisoEntity> {
       return this.repository.deleteBy(id)
    }

}
