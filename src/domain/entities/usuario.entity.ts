export interface UsuarioOptions {
    id: number;
    email: string;
    password: string;
    email_verified: string;
    last_login: string;
    createdAt?: Date;
    updatedAt?: Date | null;
}

export class UsuarioEntity {
    public readonly id: number;
    public email: string;
    private readonly password: string;
    public email_verified: string;
    public last_login: string;
    public createdAt?: Date;
    public updatedAt?: Date | null;

    constructor(options: UsuarioOptions) {
        const { id, email, password, email_verified, last_login, createdAt = new Date(), updatedAt = null } = options;
        this.id = id;
        this.email = email;
        this.password = password;
        this.email_verified = email_verified;
        this.last_login = last_login;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
