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

'use strict';
import * as models from './models';

export interface PritInformation {

    contractNo?: string;

    createBy?: string;

    createDate?: Date;

    updateBy?: string;

    updateDate?: Date;

    projRef?: number;

    projCode?: string;

    projName?: string;

    projType?: string;

    projAbbrThai?: string;

    projAbbrEng?: string;

    projStartDate?: Date;

    projStopDate?: Date;

    warrantyStartDate?: Date;

    warrantyEndDate?: Date;

    projBudget?: number;

    projCurrency?: string;

    projYear?: string;

    projStatus?: string;

    projOrgCode?: string;

    projOrgName?: string;

    projDuration?: number;

    preSaleProjCode?: string;
}
