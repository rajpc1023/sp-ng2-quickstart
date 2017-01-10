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

  pickView( view: string, e: Event ) {
    /*
     Object.keys( this.views ).forEach( function ( key ) {
     if (key === view) {
     this.views[view] = true;
     } else {
     this.views[key] = false;
     }
     }, this);
     */

    Object.keys( this.views ).forEach( key => {
      if ( key === view ) {
        this.views[ view ] = true;
      } else {
        this.views[ key ] = false;
      }
    } );
  }
}
