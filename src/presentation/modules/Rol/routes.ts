import { Router } from 'express';
import { RolDatasourceImpl } from '../../../infraestructure/datasource/rol.datasource.implt';
import { RolRepositoryImpl } from '../../../infraestructure/repository/rol.repository.impl';
import { RolController } from './controller';
import { wrapMethod } from '../../utils/wrap_method';
import { SchemaMiddleware } from '../../middlewares/validateSchema.middleware';
import { SchemaCreateRol } from './schema/create.schema';
import { SchemaUpdateRol } from './schema/update.schema';

export class RolRouter {
    static get router() {
        const router = Router();
        const datasource = new RolDatasourceImpl();
        const repository = new RolRepositoryImpl(datasource);
        const controller = new RolController(repository);

        router.get('/', wrapMethod(controller.getAll));
        router.get('/:id', wrapMethod(controller.getOne));
        router.post('/', [SchemaMiddleware.verify(SchemaCreateRol)], wrapMethod(controller.create));
        router.put('/:id', [SchemaMiddleware.verify(SchemaUpdateRol)], wrapMethod(controller.updateById));
        router.delete('/:id', wrapMethod(controller.deleteById));
        return router;
    }
}
