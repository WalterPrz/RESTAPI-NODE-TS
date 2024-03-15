import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../domain/errors/Custom.error';



export class NotFoundHandler {
    constructor() {}
    public returnNotFound( req: Request, res: Response, next: NextFunction) {
        if (!req.route)throw CustomError.NotFound(`Ruta no encontrada: ${req.originalUrl}`)
        next()
    }
}
