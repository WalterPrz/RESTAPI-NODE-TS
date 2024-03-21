import { Request, Response } from 'express';
import { PermisoRepository } from '../../../domain/repository';
import { PermisoEntity } from '../../../domain/entities';
import { CreatePermiso, DeletePermiso, GetAllPermisos, GetOnePermiso, UpdateByIdPermiso } from '../../../domain/use-cases';
import { CreatePermisoDto, UpdatePermisoDto } from '../../../domain/dtos';

export class PermisoController {
    constructor(private readonly repository: PermisoRepository) {}

    getAll = (req: Request, res: Response) => {
        return new GetAllPermisos(this.repository).execute().then((data) => res.json(data));
    };
    getOne = (req: Request, res: Response) => {
        const { id } = req.params;
        return new GetOnePermiso(this.repository).execute(+id).then((data) => res.json(data));
    };
    create = (req: Request, res: Response) => {
        const dto = CreatePermisoDto.create(req.body);
        return new CreatePermiso(this.repository).execute(dto).then((data) => res.json(data));
    };
    updateById = (req: Request, res: Response) => {
        const { id } = req.params;
        const dto = UpdatePermisoDto.create({ ...req.body, id: +id });
        return new UpdateByIdPermiso(this.repository).execute(dto).then((data) => res.json(data));
    };
    deleteById = (req: Request, res: Response) => {
        const { id } = req.params;
        return new DeletePermiso(this.repository).execute(+id).then((data) => res.json(data));
    };
}
