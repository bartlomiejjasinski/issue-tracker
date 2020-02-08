import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseData } from '../common/ResponseData.class';

import { Issue } from '../../../../server/src/shared/interface/issue.interface';
import { HttpClientWarpper } from '../common/http-client-warpper';

@Injectable({
  providedIn: 'root'
})

export class IssuesData {

  constructor(
    private _http: HttpClientWarpper,
  ) { }

  public get(): Observable<ResponseData<Issue[]>> {
    return this._http.get<Issue[]>(`issues`);
  }
  public getOne(id: string): Observable<ResponseData<Issue>> {
    return this._http.get<Issue>(`issues/${id}`);
  }
  public post(model: Issue): Observable<ResponseData<Issue>> {
    return this._http.post<Issue>(`issues/save`, model);
  }
}
