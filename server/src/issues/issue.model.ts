import { Document, model, Model } from 'mongoose';

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
        enum: ['open', 'pending', 'closed']
    }
};

export let IssueSchema: Model<IssueModel> = model<IssueModel>('Issue', schema, 'issues', true);