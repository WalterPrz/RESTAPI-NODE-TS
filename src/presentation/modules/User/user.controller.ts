import { Request, Response } from 'express';
import { CustomError } from '../../../domain/errors/Custom.error';

export class UserController {
    constructor() {} //* DI
    public getUsers = (req: Request, res: Response) => {
        // console.log(req)
        return new Promise((resolve, reject) => {
            throw CustomError.Unauthorized();
            return resolve(1);
        })
            .then((x) => {
                // console.log("x: ",x)
                // console.log("xdxd")
                res.status(200).json({ message: 'Todo bien xd' });
            })
            .catch((error) => {
                // console.log(error.message)
                throw error;
            });
    };
}
