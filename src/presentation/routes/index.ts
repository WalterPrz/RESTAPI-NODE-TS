import { Router } from "express";

export class ApiRoutes {
    static get routes(): Router {
        const router = Router();
        router.get('/v1/prueba', (req, res) => {
            return res.status(200).json({ message: 'TODO OK' })
        })
        return router
    }
}