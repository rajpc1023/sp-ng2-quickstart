import { Injectable } from '@angular/core'
import { Http, Response, ResponseContentType } from '@angular/http';
import { Transaction } from './Transaction';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionDAO {
  url = 'http://localhost:8001/tx';

  constructor( private http: Http ) {
  }

  list(): Promise<Transaction[]> {
    return this.http.get( this.url )
      .toPromise()
      .then( response => {
        return response.json() as Transaction[];
      }, this.handleError );
  }

  findById( id: number ): Promise<Transaction> {
    return this.http.get( this.url + '/' + id )
      .toPromise()
      .then(response => response.json() as Transaction);
  }

  private handleError( err: any ) {
    console.error( err );



    return Promise.reject( { msg: "Something went wrong, the cause is CLASSIFIED" } );
  }

}
