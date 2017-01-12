import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Payee } from './Payee';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PayeeDAO {
  url = 'http://localhost:8001/payee';

  constructor( private http: Http ) {
  }

  list(): Promise<Payee[]> {
    return this.http.get( this.url )
      .toPromise()
      .then( response => {
        return response.json() as Payee[];
      }, this.handleError );
  }

  findById( id: number ): Promise<Payee> {
    return this.http.get( this.url + '/' + id )
      .toPromise()
      .then(response => response.json() as Payee);
  }

  private handleError( err: any ) {
    console.error( err );
    return Promise.reject( { msg: "Something went wrong in the Payee DAO, the cause is CLASSIFIED" } );
  }

}
