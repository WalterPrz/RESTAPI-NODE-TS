import { Router } from 'express';
import { TipoPermisoRoutes } from '../modules/TipoPermiso/routes';
import { NotFoundHandler } from '../handler/not_found';

export class ApiRoutes {
    static get routes(): Router {
        const router = Router();
        router.use('/v1/tipo_permiso',  TipoPermisoRoutes.router);

        const notFoundApi = new NotFoundHandler()
        router.use(notFoundApi.returnNotFound)
        return router;
    }
}
