/*
 * To upgrade to using Observables, we will need to add some code (and remove
 * some other code!)
 *
 * + In your imports, do not import toPromise, but do add the following:
 *   rxjs/add/observable/throw
 *   rxjs/add/operator/catch
 *   rxjs/add/operator/map
 *
 * + Import Observable from rxjs/Rx
 * + Change handleError to use Observable.throw() instead of Promise.reject()
 * + Change findById() so that it does not return a Promise, but instead an
 *   Observable. Upgrade the method so that it declares a return type as well
 * + Change list() so that it does not return a Promise, but instead an
 *   Observable. Upgrade the method so that it declares a return type as well
 *
 * Then return to payees.component.ts
 *
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Payee } from './Payee';

@Injectable()
export class PayeesDAO {
  private payees: Payee[];
  baseUrl = 'http://localhost:8001/payee/';

  constructor( private http: Http ) {
  }

  findById( id ) {
    return this.http.get( this.baseUrl + id )
      .toPromise()
      .then( response => response.json() as Payee )
      .catch( this.handleError );
  }

  list() {
    return this.http.get( this.baseUrl )
      .toPromise()
      .then( response => response.json() as Payee[] )
      .catch( this.handleError );
  }

  private handleError( err ) {
    console.error( 'PayeesDAO error: ', err );

    // You could modify the err object before doing this.
    return Promise.reject( err );
  }
}
