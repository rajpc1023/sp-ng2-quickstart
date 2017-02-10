/*
 * Write a class, PayeeFilter with the following properties
 * + payeeName, a string
 * + city: a string
 * + state: a string
 * + constructor: Three arguments, all optional, payeeName, city, and state
 *                Defaults should be the empty string for all three
 *
 * Then go to payees-list.component.ts
 *
 */

export class PayeeFilter {
  payeeName: string;
  city: string;
  state: string;

  constructor( payeeName = '', city = '', state = '' ) {
    this.payeeName = payeeName;
    this.city = city;
    this.state = state;
  }

  get
}
