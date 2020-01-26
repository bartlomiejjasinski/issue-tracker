import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatFormFieldModule, MatButtonToggleModule, MatTableModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule
} from '@angular/material';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';

@NgModule({
  declarations: [
    IssuesListComponent,
    IssueDetailsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    IssuesRoutingModule,
  ],
  exports: [IssuesListComponent, IssueDetailsComponent],
  entryComponents: []
})
export class IssuesModule { }
