
import { Injectable } from '@angular/core';
import { PAYEES } from './mock-payees';
import { Payee } from './Payee';

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
