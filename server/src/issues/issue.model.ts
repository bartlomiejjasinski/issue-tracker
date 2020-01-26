import { Document, model, Model } from 'mongoose';

export interface IssueModel extends Document {
    title: String;
    description: String;
    state: 'open' | 'pending' | 'close';
}

const schema = {
    title: String,
    description: String,
    state: {
        type: String,
        enum: ['open', 'pending', 'close']
    }
};

export let IssueSchema: Model<IssueModel> = model<IssueModel>('Issue', schema, 'issues', true);