import { Component, OnInit } from '@angular/core';
import { IssueModel } from '../issue.model';

@Component({
  selector: 'issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})

export class IssuesListComponent implements OnInit {
  displayedColumns = ['title', 'description', 'state'];

  dataRows: IssueModel[] = [];

  constructor() { }

  ngOnInit() {
    this._loadData();
  }


  private _loadData(): void {
    this.dataRows = [
      {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum sir dolor amet',
        state: 'open'
      },
      {
        title: 'Lorem Ipsum2',
        description: 'Lorem ipsum sir dolor amet2',
        state: 'pending'
      }
    ];
  }
}
