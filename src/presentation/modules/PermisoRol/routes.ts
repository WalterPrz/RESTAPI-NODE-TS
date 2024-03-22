import { Router } from 'express';
import { PermisoRolDatasourceImpl } from '../../../infraestructure/datasource/permiso_rol.datasource.impl';
import { PermisoRolRepositoryImpl } from '../../../infraestructure/repository/permiso_rol.repository.impl';
import { PermisoRolController } from './controller';
import { wrapMethod } from '../../utils/wrap_method';
import { SchemaAddPermisoRol } from './schema/add.schema';
import { SchemaDeletePermisoRol } from './schema/delete.schema';
import { SchemaMiddleware } from '../../middlewares/validateSchema.middleware';

export class PermisoRolRoutes {
    static get router() {
        const router = Router();
        const datasource = new PermisoRolDatasourceImpl();
        const repository = new PermisoRolRepositoryImpl(datasource);
        const controller = new PermisoRolController(repository);
        router.post('/', [SchemaMiddleware.verify(SchemaAddPermisoRol)], wrapMethod(controller.create));
        router.delete('/', [SchemaMiddleware.verify(SchemaDeletePermisoRol)], wrapMethod(controller.delete));
        return router;
    }
}
