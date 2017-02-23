import { Injectable } from '@angular/core';
import { Transaction } from '../tx/Transaction';

export class DemoTransactionsDAO {
  findById( id: number ): Promise<Transaction> {
    let txs: Transaction[]   = getTxs(),
        foundTx: Transaction = null;

    txs.some( tx => {
      console.log( 'Looking at %d', tx.id );
      if ( tx.id === id ) {
        foundTx = tx;
        return true;
      }
    } );

    if ( foundTx ) {
      return Promise.resolve( foundTx );
    }

    return Promise.reject( { message: 'No found tx for id ' + id } );
  }
}

function getTxs(): Transaction[] {
  return [
    new Transaction( {
      "id"        : 1,
      "payeeId"   : 17,
      "payee"     : {
        "payeeId"   : 17,
        "payeeName" : "Bauch-Stehr Medical Partners",
        "categoryId": 8,
        "address"   : "671 York Ave",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "54952",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Versatile optimizing support",
        "txs"       : null
      },
      "amount"    : -97.74,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-04T23:50:19.938",
      "accountId" : 1,
      "categoryId": 8,
      "category"  : {
        "categoryId"  : 8,
        "categoryName": "Health",
        "txs"         : null
      }
    } ),
    new Transaction( {
      "id"        : 5,
      "payeeId"   : 6,
      "payee"     : {
        "payeeId"   : 6,
        "payeeName" : "Shop-Rite Grocery Store",
        "categoryId": 5,
        "address"   : "311 St. Paul Ave.",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "08697",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : -52.44,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-03T23:42:56.709",
      "accountId" : 1,
      "categoryId": 5,
      "category"  : {
        "categoryId"  : 5,
        "categoryName": "Food",
        "txs"         : null
      }
    } ),

    new Transaction( {
      "id"        : 10,
      "payeeId"   : 8,
      "payee"     : {
        "payeeId"   : 8,
        "payeeName" : "Worthless Peon Productions",
        "categoryId": 19,
        "address"   : "125 Scrub Street",
        "city"      : "Santa Monica",
        "state"     : "CA",
        "zip"       : "90111",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : 2000.0,
      "txType"    : "Credit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-07T12:20:55.267",
      "accountId" : 1,
      "categoryId": 19,
      "category"  : {
        "categoryId"  : 19,
        "categoryName": "Salary",
        "txs"         : null
      }
    } ),

    new Transaction( {
      "id"        : 11,
      "payeeId"   : 9,
      "payee"     : {
        "payeeId"   : 9,
        "payeeName" : "The CX Institute",
        "categoryId": 19,
        "address"   : "1715 Greymalkin Lane",
        "city"      : "Westchester",
        "state"     : "NY",
        "zip"       : "10047",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : 2000.0,
      "txType"    : "Credit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-12T00:29:39.489",
      "accountId" : 1,
      "categoryId": 19,
      "category"  : {
        "categoryId"  : 19,
        "categoryName": "Salary",
        "txs"         : null
      }
    } ),
    new Transaction( {
      "id"        : 13,
      "payeeId"   : 43,
      "payee"     : {
        "payeeId"   : 43,
        "payeeName" : "Wayne Enterprises",
        "categoryId": 10,
        "address"   : "319 Thomas Wayne Road",
        "city"      : "Gotham",
        "state"     : "NY",
        "zip"       : "10939",
        "image"     : "/images/technics/1.jpg",
        "motto"     : "Persevering regional moratorium",
        "txs"       : null
      },
      "amount"    : -85.17,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-06T18:15:50.529",
      "accountId" : 1,
      "categoryId": 10,
      "category"  : {
        "categoryId"  : 10,
        "categoryName": "Industrial",
        "txs"         : null
      }
    } ),

    new Transaction( {
      "id"        : 15,
      "payeeId"   : 22,
      "payee"     : {
        "payeeId"   : 22,
        "payeeName" : "Heathcote Inc",
        "categoryId": 3,
        "address"   : "798 Defaj Point",
        "city"      : "Tajuwbi",
        "state"     : "WI",
        "zip"       : "88464",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Secured web-enabled Graphical Clothing Interface",
        "txs"       : null
      },
      "amount"    : -72.61,
      "txType"    : "Auto-Pay",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-23T02:15:34.336",
      "accountId" : 1,
      "categoryId": 3,
      "category"  : {
        "categoryId"  : 3,
        "categoryName": "Clothing",
        "txs"         : null
      }
    } ),
    new Transaction( {
      "id"        : 19,
      "payeeId"   : 19,
      "payee"     : {
        "payeeId"   : 19,
        "payeeName" : "The Senator Theater",
        "categoryId": 15,
        "address"   : "1689 North York Rd",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "48693",
        "image"     : "/images/business/5.jpg",
        "motto"     : "Yesterday's movies tomorrow",
        "txs"       : null
      },
      "amount"    : -16.64,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-15T08:05:39.541",
      "accountId" : 1,
      "categoryId": 15,
      "category"  : {
        "categoryId"  : 15,
        "categoryName": "Movies",
        "txs"         : null
      }
    } ),
    new Transaction( {
      "id"        : 29,
      "payeeId"   : 46,
      "payee"     : {
        "payeeId"   : 46,
        "payeeName" : "Yoyodyne Propulsion Systems",
        "categoryId": 10,
        "address"   : "16 Blue Blazer Way",
        "city"      : "Grover's Mill",
        "state"     : "NJ",
        "zip"       : "07561",
        "image"     : "/images/cats/3.jpg",
        "motto"     : "Synchronised systemic internet solution",
        "txs"       : null
      },
      "amount"    : -71.42,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-12T05:04:50.393",
      "accountId" : 1,
      "categoryId": 10,
      "category"  : {
        "categoryId"  : 10,
        "categoryName": "Industrial",
        "txs"         : null
      }
    } ),
    new Transaction( {
      "id"        : 121,
      "payeeId"   : 46,
      "payee"     : {
        "payeeId"   : 46,
        "payeeName" : "Yoyodyne Propulsion Systems",
        "categoryId": 10,
        "address"   : "16 Blue Blazer Way",
        "city"      : "Grover's Mill",
        "state"     : "NJ",
        "zip"       : "07561",
        "image"     : "/images/cats/3.jpg",
        "motto"     : "Synchronised systemic internet solution",
        "txs"       : null
      },
      "amount"    : -49.62,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-02-26T04:19:46.139",
      "accountId" : 1,
      "categoryId": 10,
      "category"  : {
        "categoryId"  : 10,
        "categoryName": "Industrial",
        "txs"         : null
      }
    } ),
    new Transaction( {
      "id"        : 142,
      "payeeId"   : 46,
      "payee"     : {
        "payeeId"   : 46,
        "payeeName" : "Yoyodyne Propulsion Systems",
        "categoryId": 10,
        "address"   : "16 Blue Blazer Way",
        "city"      : "Grover's Mill",
        "state"     : "NJ",
        "zip"       : "07561",
        "image"     : "/images/cats/3.jpg",
        "motto"     : "Synchronised systemic internet solution",
        "txs"       : null
      },
      "amount"    : -54.04,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-03-17T11:59:53.258",
      "accountId" : 1,
      "categoryId": 10,
      "category"  : {
        "categoryId"  : 10,
        "categoryName": "Industrial",
        "txs"         : null
      }
    } ),
    new Transaction( {
        "id"        : 150,
        "payeeId"   : 46,
        "payee"     : {
          "payeeId"   : 46,
          "payeeName" : "Yoyodyne Propulsion Systems",
          "categoryId": 10,
          "address"   : "16 Blue Blazer Way",
          "city"      : "Grover's Mill",
          "state"     : "NJ",
          "zip"       : "07561",
          "image"     : "/images/cats/3.jpg",
          "motto"     : "Synchronised systemic internet solution",
          "txs"       : null
        },
        "amount"    : -86.1,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-03-05T05:46:54.388",
        "accountId" : 1,
        "categoryId": 10,
        "category"  : {
          "categoryId"  : 10,
          "categoryName": "Industrial",
          "txs"         : null
        }
      },
    ),
    new Transaction( {
      "id"        : 500,
      "payeeId"   : 47,
      "payee"     : {
        "id"        : 47,
        "payeeName" : "Goodman, Lieber, Kurtzberg, Holliway",
        "categoryId": 13,
        "address"   : "16 W 12 St.",
        "city"      : "New York",
        "state"     : "NY",
        "zip"       : "10015",
        "image"     : "/images/animals/9.jpg",
        "motto"     : null
      },
      "amount"    : -35.77,
      "txType"    : "Withdrawal",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-08-19T02:51:40.714",
      "accountId" : 2,
      "categoryId": 13,
      "category"  : {
        "id"          : 13,
        "categoryName": "Legal"
      }
    } )
  ];
}
