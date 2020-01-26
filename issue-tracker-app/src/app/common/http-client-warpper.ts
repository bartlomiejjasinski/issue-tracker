import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONFIG, IAppConfig } from './config.service';
import { ResponseData } from './ResponseData.class';

@Injectable({
    providedIn: 'root'
})
export class HttpClientWarpper {

    constructor(
        private _http: HttpClient,
        @Inject(APP_CONFIG) private config: IAppConfig
    ) { }

    public get<T>(url: string): Observable<ResponseData<T>> {
        return this._http.get<ResponseData<T>>(`${this.config.apiUrl}${url}`);
    }
}