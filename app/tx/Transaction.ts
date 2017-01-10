import { Payee } from '../payee/Payee';
import { Category } from '../category/Category';

export class Transaction {
  id: number;
  payeeId: number;
  payee: Payee;
  amount: number;
  txType: string;
  txStatus: string;
  txDate: Date;
  accountId: number;
  categoryId: number;
  category: Category;

  private fields = [
    'id',
    'payeeId',
    'amount',
    'txType',
    'txStatus',
    'txDate',
    'accountId',
    'categoryId',
    'payee',
    'category'
  ];

  constructor( config: any ) {
    if ( typeof config === 'object' ) {
      for ( let x = 0; x < this.fields.length; x++ ) {
        let field = this.fields[ x ];
        switch ( field ) {
          case 'id':
          case 'payeeId':
          case 'accountId':
          case 'categoryId':
            this[ field ] = config[ field ] || 0;
            break;
          case 'payee':
            this[ field ] = config[ field ] || new Payee( {} );
            break;
          case 'category':
            this[ field ] = config[ field ] || new Category();
            break;
          case 'txDate':
            this[ field ] = config[ field ] || new Date();
            break;
          default:
            this[ field ] = config[ field ] || '';
            break;
        }
      }
    }
  }

}

