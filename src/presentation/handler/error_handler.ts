import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../domain/errors/Custom.error';

export default (err: Error | CustomError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({ message: err.message });
    } else {
        console.log("Handler error: ", err )
        res.status(500).json({ message: err.message || 'Internal Server Error' });
    }
};
