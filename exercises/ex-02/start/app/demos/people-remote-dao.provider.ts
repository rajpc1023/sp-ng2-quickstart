import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Person } from './Person';
import * as _ from 'lodash';
import '../common/rxjs-operators';

@Injectable()
export class PeopleRemoteDAO {
  people: Person[];
  private baseUrl = 'http://localhost:8001/people/';

  constructor( private http: Http ) {
  }

  query( criteria = {} ): Promise<Person[]> {
    let localParams = new URLSearchParams();
    Object.keys( criteria ).forEach( function ( key ) {
      let paramKey = key;
      if ( typeof criteria[ key ] === 'string' ) {
        paramKey += '_like';
      }
      localParams.set( paramKey, criteria[ key ] );
    } );
    return this.http.get( this.baseUrl, { search: localParams } )
      .toPromise()
      .then( response => response.json() as Person[] )
  }

  findById( id ): Promise<Person> {
    return this.http.get( this.baseUrl + id )
      .toPromise()
      .then( response => response.json() as Person )
  }
}
