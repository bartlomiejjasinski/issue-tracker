import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

const routes: Routes = [
  {
    path: 'issues', children: [
      { path: '', component: IssuesListComponent },
      { path: 'add', component: IssueEditComponent },
      { path: ':id/edit', component: IssueEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }