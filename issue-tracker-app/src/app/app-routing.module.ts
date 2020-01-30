import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IssuesListComponent} from "./issues/issues-list/issues-list.component";

const routes: Routes = [
    { path: '', component: IssuesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
