import { Request, Response } from 'express';
import { BaseRouter } from '../abstraction/base-router';
import { IssuesData } from './issues.data';

export class IssuesRouter extends BaseRouter {

    private data = new IssuesData();

    constructor() {
        super('/api/issues');
    }

    protected configMiddlewares(): void {
        this.router.use((_req: Request, res: Response, next: (() => void)) => {
            next();
        });
    }

    protected configRoutes(): void {
        this.getAsync('/', this.getAll);
        this.postAsync('/save', this.save);
    }

    private async getAll(req: Request, res: Response): Promise<void> {

        const issues = await this.data.getAll();

        this.success(res, issues);
    }

    private async save(req: Request, res: Response): Promise<void> {

        const model = await this.data.save(req.body);

        this.success(res, model, 'Saved');
    }
}