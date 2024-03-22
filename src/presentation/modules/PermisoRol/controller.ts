import { Request, Response } from 'express';
import { PermisoRolRepository } from '../../../domain/repository';
import { AddPermisoRolDto, DeletePermisoRolDto } from '../../../domain/dtos';
import { AddPermisoRol, DeletePermisoRol } from '../../../domain/use-cases';

export class PermisoRolController {
    constructor(private readonly repository: PermisoRolRepository) {}

    create = (req: Request, res: Response) => {
        const dto = AddPermisoRolDto.create(req.body);
        return new AddPermisoRol(this.repository).execute(dto).then((data) => res.json(data));
    };
    delete = (req: Request, res: Response) => {
        const dto = DeletePermisoRolDto.create(req.body);
        return new DeletePermisoRol(this.repository).execute(dto).then((data) => res.json(data));
    };
}
