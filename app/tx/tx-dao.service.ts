import { Injectable } from '@angular/core'
import { TXS } from './mock-tx'
import { Transaction } from './Transaction';

@Injectable()
export class TransactionDAO {

  list(): Promise<Transaction[]> {
    return Promise.resolve(TXS);
  }

  findById( id: number ): Promise<Transaction> {
    let foundTx: Transaction;
    TXS.some( tx => {
      if ( tx.id === id ) {
        foundTx = tx;
        return true;
      }
    } );

    return new Promise(function(resolve, reject) {
      setTimeout( function () {
        resolve( foundTx )
      }, 5000 );
    })

  }

}
