enum IssueState {
  open,
  pending,
  closed,
}

export interface Issue {
    _id?: String;
    title: string;
    description: string;
    state: IssueState;
}

export const issueStates = Object.keys(IssueState)
                              .filter(k => typeof IssueState[k as any] === "number");