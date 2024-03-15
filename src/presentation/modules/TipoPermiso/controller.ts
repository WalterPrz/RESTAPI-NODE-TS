import { Request, Response } from 'express';
import { TipoPermisoRepository } from '../../../domain/repository';
import { GetOne, GetTodos, Create, updateById, deleteById } from '../../../domain/use-cases';
import { CreateTipoPermisoDto, UpdateTipoPermisoDto } from '../../../domain/dtos';

export class TipoPermisoController {
    constructor(
        //* Dependency Injection
        private readonly tipoPermisoRepository: TipoPermisoRepository,
    ) {}
    public getAll = (req: Request, res: Response): Promise<any> => {
        return new GetTodos(this.tipoPermisoRepository).execute().then((data) => res.json(data));
    };
    public getOne = (req: Request, res: Response): Promise<any> => {
        const {id} =  req.params
        return new GetOne(this.tipoPermisoRepository).execute(+id).then((data) => res.json(data));
    }
    public create = (req: Request, res: Response):Promise<any> =>{
        const dto =  CreateTipoPermisoDto.create(req.body)
        return new Create(this.tipoPermisoRepository).execute(dto).then((data) => res.json(data));
    }
    public updateById = (req: Request, res: Response):Promise<any> =>{
        const {id} = req.params
        const dto =  UpdateTipoPermisoDto.create({...req.body, id:+id})
        return new updateById(this.tipoPermisoRepository).execute(dto).then((data) => res.json(data));
    }
    public deleteById = (req: Request, res: Response):Promise<any> =>{
        const {id} = req.params
        return new deleteById(this.tipoPermisoRepository).execute(+id).then((data) => res.json(data));
    }
}
