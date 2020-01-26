import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuesListComponent } from './issues-list/issues-list.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: IssuesListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }