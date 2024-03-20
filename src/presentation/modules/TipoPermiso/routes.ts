import { Router } from 'express';
import { TipoPermisoDatasourceImpl } from '../../../infraestructure/datasource/tipo_permiso.datasource.impl';
import { TipoPermisoRepositoryImpl } from '../../../infraestructure/repository/tipo_permiso.repository.impl';
import { TipoPermisoController } from './controller';
import { wrapMethod } from '../../utils/wrap_method';
import { SchemaMiddleware } from '../../middlewares/validateSchema.middleware';
import { SchemaCreateTipoPermiso } from './schemas/create.schema';
import { SchemaUpdateTipoPermiso } from './schemas/update.schema';

export class TipoPermisoRoutes {
    static get router() {
        const router = Router();
        const datasource = new TipoPermisoDatasourceImpl();
        const repository = new TipoPermisoRepositoryImpl(datasource);
        const tipoPermisoController = new TipoPermisoController(repository);

        router.get('/', wrapMethod(tipoPermisoController.getAll));
        router.get('/:id', wrapMethod(tipoPermisoController.getOne));
        router.post('/', [SchemaMiddleware.verify(SchemaCreateTipoPermiso)], wrapMethod(tipoPermisoController.create));
        router.put('/:id', [SchemaMiddleware.verify(SchemaUpdateTipoPermiso)], wrapMethod(tipoPermisoController.updateById));
        router.delete('/:id', wrapMethod(tipoPermisoController.deleteById));
        return router;
    }
}
