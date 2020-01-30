import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatButtonModule,
  MatTableModule
} from '@angular/material';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

@NgModule({
  declarations: [
    IssuesListComponent,
    IssueEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTableModule,
    IssuesRoutingModule,
  ],
  exports: [IssuesListComponent],
  entryComponents: []
})
export class IssuesModule { }
