/*
 * Objectives:
 * + Update PayeesDAO to use Http
 * + No updates should be necessary to PayeeComponent, since it already consumes
 *   Promises
 *
 * Instead of using the mock-payees file, we will be using an Http connection to
 * retrieve data from our restful server
 *
 * We have already imported the HttpModule into the payee.module.ts file.
 *
 * Here, you should do the following:
 * + Import Http
 * + Import the RxJs operator toPromise (import 'rxjs/add/operator/toPromise')
 * + Add a constructor to inject Http into the DAO
 * + Set a baseUrl property to http://localhost:8001/payee
 * + Update list() to use Http to query the baseUrl and return a Promise which
 *   resolves to an array of Payees.
 * + Update findById() to use Http to query the baseUrl + the id and return a
 *   Promise which will resolve to a single Payee.
 *
 * You should not need to make changes elsewhere (the benefits of a well-designed
 * API!), so you can test by going to http://localhost:3000/payees and seeing
 * if your code still works. You will know you are successful if the list of
 * Payees is longer than before.
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
      .then( response => response.json() as Payee );
  }

  list() {
    return this.http.get( this.baseUrl )
      .toPromise()
      .then( response => response.json() as Payee[] );

  }
}
