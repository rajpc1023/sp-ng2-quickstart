import * as _ from 'lodash';

export class TransactionCriteria {
  payee: { payeeName: string, city: string, state: string };
  category: { categoryName: string };
  amount: number;
  txType: string;
  txDate: string;
  txStatus: string;

  constructor() {
    this.payee = { payeeName: '', city: '', state: '' };
    this.category = { categoryName: '' };

  }

  getCriteria() {
    let criteria = {};
    Object.assign( criteria, this );

    Object.keys( criteria ).forEach( function ( key ) {
      if ( key === 'payee' || key === 'category' ) {
        let atLeastOne = false;
        Object.keys( criteria[ key ] ).forEach( function ( subKey ) {
          if ( !criteria[ key ][ subKey ] ) {
            delete criteria[ key ][ subKey ];
          } else {
            atLeastOne = true;
          }
        } );

        if ( !atLeastOne )
          delete criteria[ key ];
      }
    } );

    return criteria;
  }

  getCriteriaFlat() {
    let criteria = this.getCriteria(),
        result   = {};

    return this.flatten( criteria, '', result );
  }

  flatten( o: {}, baseKey: string, result: {} ): {} {
    let tc = this;

    Object.keys( o ).forEach( function ( subKey ) {
      let currentKey = (baseKey ? baseKey + '.' + subKey : subKey);
      if ( typeof o[ subKey ] === 'object' ) {
        result = tc.flatten( o[ subKey ], currentKey, result );
      } else {
        result[ currentKey ] = o[ subKey ];
      }
    } );

    return result;
  }

}
