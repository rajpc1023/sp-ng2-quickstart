export class TransactionFilter {
  payeeName: string;
  txDate: string;
  amount: string;
  categoryName: string;

  constructor( payeeName = '', txDate = '', amount = '', categoryName = '' ) {
    this.txDate = txDate;
    this.amount = amount;
    this.payeeName = payeeName;
    this.categoryName = categoryName;
  }

  getCriteria() {
    let criteria = {}, filter = this;
    Object.keys( filter ).forEach( function ( key ) {
      if ( filter[ key ] )
        criteria[ key ] = new RegExp( filter[ key ], 'i' );
    } );

    return criteria;
  }

}
