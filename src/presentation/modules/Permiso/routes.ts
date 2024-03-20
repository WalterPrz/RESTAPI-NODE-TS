import { Router } from 'express';
import { PermisoDatasourceImpl } from '../../../infraestructure/datasource/permiso.datasource.impl';
import { PermisoRepositoryImpl } from '../../../infraestructure/repository/permiso.repository.impl';
import { PermisoController } from './controller';
import { wrapMethod } from '../../utils/wrap_method';
import { SchemaMiddleware } from '../../middlewares/validateSchema.middleware';
import { SchemaCreatePermiso } from './schema/create.schema';
import { SchemaUpdatePermiso } from './schema/update.schema';

export class PermisoRoutes {
    static get router() {
        const router = Router();
        const datasource = new PermisoDatasourceImpl();
        const repository = new PermisoRepositoryImpl(datasource);
        const controller = new PermisoController(repository);

        router.get('/', wrapMethod(controller.getAll));
        router.get('/:id', wrapMethod(controller.getOne));
        router.post('/', [SchemaMiddleware.verify(SchemaCreatePermiso)], wrapMethod(controller.create));
        router.put('/:id', [SchemaMiddleware.verify(SchemaUpdatePermiso)], wrapMethod(controller.updateById));
        router.delete('/:id', wrapMethod(controller.deleteById));

        return router;
    }
}
