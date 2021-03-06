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
export class PritCustomerApi {
    protected basePath = '/api/pri';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * PriBussinessSpec.addProjCustomer
     * สำหรับการบันทึกข้อมูลProject Customer
     * @param body 
     */
    public addProjCustomer (body?: models.ProjCustomerAddBean, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritCustomer';

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
     * PriBussinessSpec.editProjCustomer
     * สำหรับการแก้ไขข้อมูลProject Customer
     * @param body 
     */
    public editProjCustomer (body?: models.ProjCustomerBean, extraHttpRequestParams?: any ) : Observable<models.ProjCustomerBean> {
        const path = this.basePath + '/pritCustomer';

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
     * PriBussinessSpec.getProjCustomerByRef
     * สำหรับการค้นหาตารางข้อมูลProject Customer ตาม Primary key
     * @param projCustomerRef 
     */
    public getProjCustomerByRef (projCustomerRef: number, extraHttpRequestParams?: any ) : Observable<models.PritCustomer> {
        const path = this.basePath + '/pritCustomer/{projCustomerRef}'
            .replace('{' + 'projCustomerRef' + '}', String(projCustomerRef));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projCustomerRef' is not null or undefined
        if (projCustomerRef === null || projCustomerRef === undefined) {
            throw new Error('Required parameter projCustomerRef was null or undefined when calling getProjCustomerByRef.');
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
     * PriBussinessSpec.getProjCustomerList
     * สำหรับการค้นหาตารางข้อมูลProject Customer
     * @param projCode 
     * @param start 
     * @param size 
     */
    public getProjCustomerList (projCode: string, start?: number, size?: number, extraHttpRequestParams?: any ) : Observable<Array<models.ProjCustomerBean>> {
        const path = this.basePath + '/pritCustomer/projCode/{projCode}'
            .replace('{' + 'projCode' + '}', String(projCode));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projCode' is not null or undefined
        if (projCode === null || projCode === undefined) {
            throw new Error('Required parameter projCode was null or undefined when calling getProjCustomerList.');
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
     * PriBussinessSpec.removeProjCustomerByRef
     * สำหรับการลบข้อมูลProject Customer ตาม Primary Key
     * @param projCustomerRef 
     */
    public removeProjCustomerByRef (projCustomerRef: number, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritCustomer/{projCustomerRef}'
            .replace('{' + 'projCustomerRef' + '}', String(projCustomerRef));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'projCustomerRef' is not null or undefined
        if (projCustomerRef === null || projCustomerRef === undefined) {
            throw new Error('Required parameter projCustomerRef was null or undefined when calling removeProjCustomerByRef.');
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
     * PriBussinessSpec.removeProjCustomerList
     * สำหรับการลบข้อมูลProject Customer
     * @param body 
     */
    public removeProjCustomerList (body?: Array<number>, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pritCustomer';

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
