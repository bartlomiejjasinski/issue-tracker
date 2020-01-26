import { Component, OnInit } from '@angular/core';
import { IssueModel } from '../issue.model';
import { IssuesData } from './../issues.data';
import { ResponseData } from "../../common/ResponseData.class";

@Component({
  selector: 'issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})

export class IssuesListComponent implements OnInit {
  displayedColumns = ['title', 'description', 'state'];

  dataRows: IssueModel[] = [];

  constructor(private data: IssuesData) { }

  ngOnInit() {
    this._loadData();
  }

  private _loadData(): void {

    this.data.get().subscribe((result: ResponseData<IssueModel[]>) => {
      if (result.success) {
        this.dataRows = result.data;
      }
    });
  }
}