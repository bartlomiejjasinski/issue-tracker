import { Request, Response } from 'express';
import { BaseRouter } from '../abstraction/base-router';
import { IssuesData } from './issues.data';
import { IssueModel, issueStates } from "./issue.model";

export class IssuesRouter extends BaseRouter {

    private data = new IssuesData();

    constructor() {
        super('/api/issues');
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

        const updatedModel = req.body;

        try {
            const currentModel = await this.data.getById(updatedModel._id);
            await this.validate(updatedModel, currentModel);

            const model = await this.data.save(req.body);
            this.success(res, model, 'Saved');
        } catch (err) {

            const result = {
                success: false,
                errorMessage: err.message
            };

            res.status(200).json(result);
        }
    }

    private validate(updatedModel: IssueModel, currentModel: IssueModel): Promise<void> {

        const updatedIndex = issueStates.findIndex(state => state === updatedModel.state);
        const currentIndex = issueStates.findIndex(state => state === currentModel.state);

        if (updatedIndex < currentIndex) {
            throw new Error('This state is not allowed');
        }

        return Promise.resolve();
    }
}