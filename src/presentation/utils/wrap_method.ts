/**
 * Middleware que envuelve una funciion en una promesa y maneja el error centralizado
 * @param {Function} controllerMethod La función del controlador.
 * @returns {Function} El middleware.
 */

import { NextFunction, Request, Response } from 'express';

export const wrapMethod = (controllerMethod: (req: Request, res: Response) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        controllerMethod(req, res)
            .then(() => {
                next();
            })
            .catch((error) => {
                return next(error);
            });
    };
};
