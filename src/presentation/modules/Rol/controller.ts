import { Request, Response } from 'express';
import { RolRepository } from '../../../domain/repository';
import { CreateRolDto, UpdateRolDto } from '../../../domain/dtos';
import { CreateRol, DeleteRol, GetAllRols, GetOneRol, UpdateByIdRol } from '../../../domain/use-cases';

export class RolController {
    constructor(private readonly repository: RolRepository) {}
    getAll = (req: Request, res: Response) => {
        return new GetAllRols(this.repository).execute().then((data) => res.json(data));
    };
    getOne = (req: Request, res: Response) => {
        const { id } = req.params;
        return new GetOneRol(this.repository).execute(+id).then((data) => res.json(data));
    };
    create = (req: Request, res: Response) => {
        const dto = CreateRolDto.create(req.body);
        return new CreateRol(this.repository).execute(dto).then((data) => res.json(data));
    };
    updateById = (req: Request, res: Response) => {
        const { id } = req.params;
        const dto = UpdateRolDto.create({ ...req.body, id: +id });
        return new UpdateByIdRol(this.repository).execute(dto).then((data) => res.json(data));
    };
    deleteById = (req: Request, res: Response) => {
        const { id } = req.params;
        return new DeleteRol(this.repository).execute(+id).then((data) => res.json(data));
    };
}
