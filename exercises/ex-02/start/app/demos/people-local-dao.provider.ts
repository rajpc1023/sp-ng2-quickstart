import { Injectable } from '@angular/core';
import { PEOPLE } from './mock-people';
import { Person } from './Person';
import * as _ from 'lodash';

@Injectable()
export class PeopleLocalDAO {
  people: Person[] = PEOPLE;

  query( criteria = {} ): Promise<Person[]> {
    return Promise.resolve( _.filter( this.people, _.matches( criteria ) ) );
  }

  findById( id ): Promise<Person> {
    return Promise.resolve( _.find( this.people, person => person.id === id ) );
  }

  save(person: Person) {
    let index = _.findIndex(this.people, person);
    if (index > -1) {
      this.people[ index ] = person;
      return true;
    }
    return false;
  }
}
