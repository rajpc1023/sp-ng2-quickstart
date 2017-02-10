import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Payee } from './Payee';

@Injectable()
export class PayeesDAO {
  private payees: Payee[];
  baseUrl = 'http://localhost:8001/payee/';

  constructor( private http: Http ) {
  }

  findById( id ):Observable<Payee> {
    return this.http.get( this.baseUrl + id )
      .map( response => response.json() as Payee )
      .catch(this.handleError);
  }

  list():Observable<Payee[]> {
    return this.http.get( this.baseUrl )
      .map( response => response.json() as Payee[] )
      .catch(this.handleError);
  }

  private handleError(err) {
    console.error('PayeesDAO error: ', err);

    return Observable.throw( err );
  }
}
