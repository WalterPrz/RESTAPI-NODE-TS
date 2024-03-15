export class CustomError extends Error {
    private constructor(
        public readonly message: string,
        public readonly statusCode: number = 400,
    ) {
        super(message);
    }
    static NotFound(message: string = 'Recurso no encontrado'): CustomError {
        return new CustomError(message, 404);
    }
    static Forbidden(message: string = 'No autorizado'): CustomError {
        return new CustomError(message, 403);
    }
    static Unauthorized(message: string = 'No autenticado'): CustomError {
        return new CustomError(message, 401);
    }
    static UnprocessableEntity(message: string = 'Error en la validación de datos de la solicitud'): CustomError {
        return new CustomError(message, 422);
    }
}
