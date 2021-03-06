import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseData } from '../common/ResponseData.class';

import { IssueModel } from './issue.model';
import { HttpClientWarpper } from '../common/http-client-warpper';

@Injectable({
  providedIn: 'root'
})

export class IssuesData {

  constructor(
    private _http: HttpClientWarpper,
  ) { }

  public get(): Observable<ResponseData<IssueModel[]>> {
    return this._http.get<IssueModel[]>(`issues`);
  }
  public getOne(id: string): Observable<ResponseData<IssueModel>> {
    return this._http.get<IssueModel>(`issues/${id}`);
  }
  public post(model: IssueModel): Observable<ResponseData<IssueModel>> {
    return this._http.post<IssueModel>(`issues/save`, model);
  }
}