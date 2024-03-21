import { Router } from 'express';
import { TipoPermisoRoutes } from '../modules/TipoPermiso/routes';
import { PermisoRoutes } from '../modules/Permiso/routes';
import { NotFoundHandler } from '../handler/not_found';
import { RolRouter } from '../modules/Rol/routes';

export class ApiRoutes {
    static get routes(): Router {
        const router = Router();
        router.use('/v1/tipo_permiso',  TipoPermisoRoutes.router);
        router.use('/v1/permiso',  PermisoRoutes.router);
        router.use('/v1/rol',  RolRouter.router);

        const notFoundApi = new NotFoundHandler()
        router.use(notFoundApi.returnNotFound)
        return router;
    }
}
