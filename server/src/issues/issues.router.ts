import { Request, Response } from 'express';
import { BaseRouter } from '../abstraction/base-router';
import { IssuesData } from './issues.data';
import { Issue, issueStates } from "../shared/interface/issue.interface";

export class IssuesRouter extends BaseRouter {

    private data = new IssuesData();

    constructor() {
        super('/api/issues');
    }

    protected configRoutes(): void {
        this.getAsync('/', this.getAll);
        this.getAsync('/:id', this.getOne);
        this.postAsync('/save', this.save);
    }

    private async getOne(req: Request, res: Response): Promise<void> {
        const issue = await this.data.getById(req.params.id);
        this.success(res, issue);
    }

    private async getAll(req: Request, res: Response): Promise<void> {
        const issues = await this.data.getAll();
        this.success(res, issues);
    }

    private async save(req: Request, res: Response): Promise<void> {

        try {
            await this.validate(req.body);

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

    private async validate(issue: Issue): Promise<void> {

        if (issue._id === 'New') {
            return Promise.resolve();
        }

        const dbIssue = await this.data.getById(issue._id);

        const index = issueStates.findIndex(state => state as any === issue.state);
        const dbIndex = issueStates.findIndex(state => state as any === dbIssue.state);

        if (index < dbIndex) {
            throw new Error('This state is not allowed');
        }

        return Promise.resolve();
    }
}