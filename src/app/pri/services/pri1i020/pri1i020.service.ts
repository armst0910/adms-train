import { Injectable, Inject } from '@angular/core';
import { PritScopeApi } from '../../api/pri1i020/api/PritScopeApi';
import { PritScope } from '../../api/pri1i020/model/PritScope';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export { PritScope } from '../../api/pri1i020/model/PritScope';

@Injectable()
export class Pri1i020Service {

  constructor(private priScopeService: PritScopeApi, private http: Http) {
  }

  getPritScopeList(projCode: string): Observable<PritScope[]> {

    /* for mockup */
    return this.getMockupPritScopeList(projCode)
      .map((response: PritScope[]) =>
        response.map((pritScope: PritScope) => {
          return {
            projScopeRef: pritScope.projScopeRef,  
            projCode: pritScope.projCode,
            projScopeDetail: pritScope.scoreDetail,
            edit: false
          }
        })
      );

  }

  getPritScopeListByProjCode(projCode: string): Observable<PritScope[]> {
    return this.priScopeService.pritScopeFind()
      .map((response: PritScope[]) =>
        response.map((pritScope: PritScope) => {
          return {
            projCode: pritScope.projCode,
            projScopeDetail: pritScope.scoreDetail,
            edit: false
          }
        })
      );

  }

  getMockupPritScopeList(projCode: string): Observable<PritScope[]> {
    return this.http.get('app/pri/mockup/pri1i020/mockup.json')
      .map((response: Response) => response.json())
      .map((pritScopeList: PritScope[]) => pritScopeList.filter((pritScope: PritScope) => pritScope.projCode === projCode));
  }

  private setHeaders() {
    if (!this.priScopeService.defaultHeaders.has('Authorization')) {
      this.priScopeService.defaultHeaders.append('Content-Type', 'application/json');
      this.priScopeService.defaultHeaders.append('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
      this.priScopeService.defaultHeaders.append('Accept', 'application/json');
    }
    return;
  }
}
