import { Component, OnInit } from '@angular/core';
// import { Issue } from '../issue.interface';
import { IssuesData } from './../issues.data';
import { Issue } from '../../../../../server/src/shared/interface/issue.interface';
import { ResponseData } from "../../common/ResponseData.class";

@Component({
  selector: 'issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})

export class IssuesListComponent implements OnInit {

  dataRows: Issue[] = [];
  displayedColumns = ['title', 'description', 'state', 'action'];

  constructor(private data: IssuesData) { }

  ngOnInit() {
    this._loadData();
  }

  private _loadData(): void {

    this.data.get().subscribe((result: ResponseData<Issue[]>) => {
      if (result.success) {
        this.dataRows = result.data;
      }
    });
  }
}
