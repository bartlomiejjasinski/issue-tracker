import { DataService } from '../abstraction/data-service';
import { IssueModel, IssueSchema } from './issue.model';

export class IssuesData extends DataService<IssueModel> {

    constructor() {
        super(IssueSchema);
    }
}