export class IssueModel {
    title: string;
    description: string;
    state: string;
}

export const issueStates = ['open', 'pending', 'closed'];