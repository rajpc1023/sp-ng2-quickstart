import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http';
import { Transaction } from './Transaction';
import { Observable } from 'rxjs';
import '../common/rxjs-operators';

@Injectable()
export class TransactionsDAO {
  url = 'http://localhost:8001/tx';
  params: URLSearchParams;

  constructor( private http: Http ) {
    this.params = new URLSearchParams();
    this.params.set( '_limit', '50' );
  }

  list(): Observable<Transaction[]> {
    return this.http.get( this.url, { search: this.params } )
      .map( response => response.json() as Transaction[],
        this.handleError );
  }

  listAsPromise(): Promise<Transaction[]> {
    return this.http.get( this.url, { search: this.params } )
      .toPromise()
      .then( response => response.json() )
      .catch( this.handleError )
  }

  query( criteria: {} ) {
    let localParams = this.params.clone();
    Object.keys( criteria ).forEach( function ( key ) {
      let paramKey = key;
      if ( typeof criteria[ key ] === 'string' ) {
        paramKey += '_like';
      }
      localParams.set( paramKey, criteria[ key ] );
    } );

    return this.http.get( this.url, { search: localParams } )
      .map( response => response.json() as Transaction[],
        this.handleError )
  }

  findById( id: number ): Observable<Transaction> {
    return this.http.get( this.url + '/' + id )
      .map( response => response.json() as Transaction,
        this.handleError );
  }

  private handleError( err: any ) {
    // Have more extensive error handling here
    console.error( err );

    // Decide whether to send along more error information here
    return Promise.reject( { msg: "TransactionsDAO internal error" } );
  }

}
