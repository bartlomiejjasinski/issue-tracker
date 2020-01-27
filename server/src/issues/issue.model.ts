import { Document, model, Model } from 'mongoose';

export const issueStates = ['open', 'pending', 'closed'];

export interface IssueModel extends Document {
    title: String;
    description: String;
    state: 'open' | 'pending' | 'closed';
}

const schema = {
    title: String,
    description: String,
    state: {
        type: String,
        enum: issueStates
    }
};

export let IssueSchema: Model<IssueModel> = model<IssueModel>('Issue', schema, 'issues', true);