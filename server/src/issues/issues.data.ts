import { DataService } from '../abstraction/data-service';
import { IssueSchema } from './issue.model';
import { Issue } from "../shared/interface/issue.interface";

export class IssuesData extends DataService<Issue> {

    constructor() {
        super(IssueSchema);
    }
}