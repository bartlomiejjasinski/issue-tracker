import { RequestHandler, Response, Router, Application } from 'express';
import { PathParams } from 'express-serve-static-core';
import { ResponseData } from '../common/ResponseData';

export abstract class BaseRouter {
    private readonly _basePath: string;
    private readonly _router: Router;

    constructor(basePath: string) {
        this._router = Router();
        this._basePath = basePath;

        this.configMiddlewares();
        this.configRoutes();
    }

    public get router(): Router {
        return this._router;
    }

    public asMiddleware(app: Application): void {
        app.use(this._basePath, this._router);
    }

    protected abstract configMiddlewares(): void;
    protected abstract configRoutes(): void;

    protected getAsync(path: PathParams, handler: RequestHandler): void {
        this._router.get(path, handler.bind(this));
    }

    protected postAsync(path: PathParams, handler: RequestHandler): void {
        this._router.post(path, handler.bind(this));
    }

    protected success(res: Response, data: any, message?: string): void {
        const result: ResponseData = {
            success: true,
            message,
            data
        };
        res.json(result);
    }
}