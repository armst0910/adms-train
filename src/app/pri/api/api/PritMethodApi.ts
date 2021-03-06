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
export class PritMethodApi {
    protected basePath = '/api/pri';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * PriBussinessSpec.addProjMethod
     * สำหรับการบันทึกข้อมูลProject Method
     * @param body 
     */
    public addProjMethod (body?: models.ProjMethodAddBean, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritMethod';

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
     * PriBussinessSpec.editProjMethod
     * สำหรับการแก้ไขข้อมูลProject Method
     * @param body 
     */
    public editProjMethod (body?: models.ProjMethodBean, extraHttpRequestParams?: any ) : Observable<models.ProjMethodBean> {
        const path = this.basePath + '/pritMethod';

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
     * PriBussinessSpec.getProjMethodByRef
     * สำหรับการค้นหาตารางข้อมูลProject Method ตาม Primary key
     * @param projMethodRef 
     */
    public getProjMethodByRef (projMethodRef: number, extraHttpRequestParams?: any ) : Observable<models.PritMethod> {
        const path = this.basePath + '/pritMethod/{projMethodRef}'
            .replace('{' + 'projMethodRef' + '}', String(projMethodRef));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projMethodRef' is not null or undefined
        if (projMethodRef === null || projMethodRef === undefined) {
            throw new Error('Required parameter projMethodRef was null or undefined when calling getProjMethodByRef.');
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
     * PriBussinessSpec.getProjMethodList
     * สำหรับการค้นหาตารางข้อมูลProject Method
     * @param projCode 
     * @param start 
     * @param size 
     */
    public getProjMethodList (projCode: string, start?: number, size?: number, extraHttpRequestParams?: any ) : Observable<Array<models.ProjMethodBean>> {
        const path = this.basePath + '/pritMethod/projCode/{projCode}'
            .replace('{' + 'projCode' + '}', String(projCode));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projCode' is not null or undefined
        if (projCode === null || projCode === undefined) {
            throw new Error('Required parameter projCode was null or undefined when calling getProjMethodList.');
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
     * PriBussinessSpec.removeProjMethodByRef
     * สำหรับการลบข้อมูลProject Method ตาม Primary Key
     * @param projMethodRef 
     */
    public removeProjMethodByRef (projMethodRef: number, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritMethod/{projMethodRef}'
            .replace('{' + 'projMethodRef' + '}', String(projMethodRef));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projMethodRef' is not null or undefined
        if (projMethodRef === null || projMethodRef === undefined) {
            throw new Error('Required parameter projMethodRef was null or undefined when calling removeProjMethodByRef.');
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
     * PriBussinessSpec.removeProjMethodList
     * สำหรับการลบข้อมูลProject Method
     * @param body 
     */
    public removeProjMethodList (body?: Array<number>, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritMethod';

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
