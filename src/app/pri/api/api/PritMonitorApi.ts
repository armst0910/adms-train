/**
 * 
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class PritMonitorApi {
    protected basePath = '/api/pri';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * PriBussinessSpec.addProjMonitor
     * สำหรับการบันทึกข้อมูลProject Monitor
     * @param body 
     */
    public addProjMonitor (body?: models.ProjMonitorAddBean, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritMonitor';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * PriBussinessSpec.editProjMonitor
     * สำหรับการแก้ไขข้อมูลProject Monitor
     * @param body 
     */
    public editProjMonitor (body?: models.ProjMonitorBean, extraHttpRequestParams?: any ) : Observable<models.ProjMonitorBean> {
        const path = this.basePath + '/pritMonitor';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * PriBussinessSpec.getProjMonitorByRef
     * สำหรับการค้นหาตารางข้อมูลProject Monitor ตาม Primary key
     * @param projMonitorRef 
     */
    public getProjMonitorByRef (projMonitorRef: number, extraHttpRequestParams?: any ) : Observable<models.PritMonitor> {
        const path = this.basePath + '/pritMonitor/{projMonitorRef}'
            .replace('{' + 'projMonitorRef' + '}', String(projMonitorRef));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projMonitorRef' is not null or undefined
        if (projMonitorRef === null || projMonitorRef === undefined) {
            throw new Error('Required parameter projMonitorRef was null or undefined when calling getProjMonitorByRef.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * PriBussinessSpec.getProjMonitorList
     * สำหรับการค้นหาตารางข้อมูลProject Monitor
     * @param projCode 
     * @param start 
     * @param size 
     */
    public getProjMonitorList (projCode: string, start?: number, size?: number, extraHttpRequestParams?: any ) : Observable<Array<models.ProjMonitorBean>> {
        const path = this.basePath + '/pritMonitor/projCode/{projCode}'
            .replace('{' + 'projCode' + '}', String(projCode));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projCode' is not null or undefined
        if (projCode === null || projCode === undefined) {
            throw new Error('Required parameter projCode was null or undefined when calling getProjMonitorList.');
        }
        if (start !== undefined) {
            queryParameters.set('start', String(start));
        }

        if (size !== undefined) {
            queryParameters.set('size', String(size));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * PriBussinessSpec.removeProjMonitorByRef
     * สำหรับการลบข้อมูลProject Monitor ตาม Primary Key
     * @param projMonitorRef 
     */
    public removeProjMonitorByRef (projMonitorRef: number, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritMonitor/{projMonitorRef}'
            .replace('{' + 'projMonitorRef' + '}', String(projMonitorRef));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projMonitorRef' is not null or undefined
        if (projMonitorRef === null || projMonitorRef === undefined) {
            throw new Error('Required parameter projMonitorRef was null or undefined when calling removeProjMonitorByRef.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * PriBussinessSpec.removeProjMonitorList
     * สำหรับการลบข้อมูลProject Monitor
     * @param body 
     */
    public removeProjMonitorList (body?: Array<number>, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritMonitor';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
