import { model, Model } from 'mongoose';
import { Issue, issueStates } from "../shared/interface/issue.interface";

const schema = {
    title: String,
    description: String,
    state: {
        type: String,
        enum: issueStates
    }
};

export let IssueSchema: Model<Issue> = model<Issue>('Issue', schema, 'issues', true);