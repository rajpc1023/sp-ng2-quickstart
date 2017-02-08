import { Component, Output, EventEmitter } from '@angular/core';
import { TransactionCriteria } from './TransactionCriteria';

@Component( {
  moduleId   : module.id,
  selector   : 'transaction-form',
  templateUrl: 'transaction-form.component.html'
} )
export class TransactionFormComponent {

  criteria:TransactionCriteria = new TransactionCriteria();

  @Output()
  onSearch = new EventEmitter<TransactionCriteria>();

  search(criteria:TransactionCriteria, event) {
    event.preventDefault();
    this.onSearch.emit( criteria );
  }

}
