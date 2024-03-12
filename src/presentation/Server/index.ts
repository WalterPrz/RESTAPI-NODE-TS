import express, { Router, Express } from 'express'
import fileUpload from 'express-fileupload'
import compression from 'compression'
import errorHandler from '../handler/error_handler';
interface Options {
    port: number,
    api_routes: Router
    public_path?: string,
}

export class Server {
    public readonly app: Express;
    private readonly port: number;
    private serverListener?: any;
    private readonly apiRoutes: Router;
    private readonly publicPath: string;
    constructor(options: Options) {
        const { port, api_routes, public_path = 'public' } = options
        this.port = port;
        this.apiRoutes = api_routes;
        this.app = express()
        this.publicPath = public_path;
    }
    async start() {
        //* middleware
        this.app.use(fileUpload({ createParentPath: true }));
        this.app.use(express.json({ limit: "100mb" }))
        this.app.use(express.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }))
        this.app.use(compression())

        //* public folder
        this.app.use(express.static(this.publicPath));

        //* Routes
        this.app.use('/api', this.apiRoutes);

        //* SPA

        // this.app.get('*', (req, res) => {
        //     const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`)
        //     res.sendFile(indexPath)
        //     return
        // })
        //* log Errors()
        //this.app.use()

        //* error handler()
        this.app.use(errorHandler)

        //* start
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }
    public close() {
        this.serverListener?.close()
    }

}
