/*
 * Import the array of Payees from mock-payees.ts
 *
 * Create an Injectable DAO, PayeesDAO. It should have the following methods:
 *
 * Name: findById
 * Arguments: id, integer
 * Returns: A Promise which resolves to the Payee with the specified id
 * findById(id:int):Payee
 *
 * Name: list
 * Arguments: none
 * Returns: A Promise which resolves to an array of Payees
 * list():Payee[]
 *
 * When the service is complete, go to payee.module.ts and register it.
 *
 */

import { Injectable } from '@angular/core';
import { PAYEES } from './mock-payees';

@Injectable()
export class PayeesDAO {
  private payees: Payee[] = PAYEES;

  findById(id) {
    let foundPayee = {};
    this.payees.some(payee => {
      if (payee.id === id) {
        foundPayee = payee;
        return true;
      }
    });
    return Promise.resolve(foundPayee);
  }

  list() {
    return Promise.resolve(this.payees);
  }
}
