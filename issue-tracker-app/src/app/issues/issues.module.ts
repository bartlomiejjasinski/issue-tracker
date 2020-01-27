import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule, MatCardModule, MatSnackBarModule} from '@angular/material';
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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
    IssuesRoutingModule,
  ],
  exports: [IssuesListComponent, IssueDetailsComponent],
  entryComponents: []
})
export class IssuesModule { }
