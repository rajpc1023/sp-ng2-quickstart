import { Component } from '@angular/core';

@Component( {
  selector   : 'banking',
  templateUrl: 'app/banking.component.html'
} )
export class BankingComponent {
  private views = {
    tx   : true,
    payee: false
  };

  showView(view:string) {
    return this.views[ view ] ? 'block' : 'none';
  }

  pickView( view: string, e: Event ) {
    Object.keys( this.views ).forEach( key => {
      if ( key === view ) {
        this.views[ view ] = true;
      } else {
        this.views[ key ] = false;
      }
    } );
  }
}
