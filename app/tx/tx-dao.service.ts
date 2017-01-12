import { Injectable } from '@angular/core'
import { Http, Response, ResponseContentType, URLSearchParams } from '@angular/http';
import { Transaction } from './Transaction';
import { Observable } from 'rxjs';
import '../common/rxjs-operators';

@Injectable()
export class TransactionDAO {
  url = 'http://localhost:8001/tx';
  params: URLSearchParams;

  constructor( private http: Http ) {
    this.params = new URLSearchParams();
    this.params.set( '_limit', '50' );
  }

  all(): Observable<Transaction[]> {
    return this.http.get( this.url, { search: this.params } )
      .map( response => {
        return response.json() as Transaction[];
      }, this.handleError );
  }


  list(): Promise<Transaction[]> {
    let dao = this;
    return this.http.get( this.url, { search: dao.params } )
      .toPromise()
      .then( response => {
        return response.json() as Transaction[];
      }, this.handleError );
  }

  findById( id: number ): Promise<Transaction> {
    return this.http.get( this.url + '/' + id )
      .toPromise()
      .then( response => response.json() as Transaction );
  }

  private handleError( err: any ) {
    console.error( err );

    return Promise.reject( { msg: "Something went wrong, the cause is CLASSIFIED" } );
  }

}
