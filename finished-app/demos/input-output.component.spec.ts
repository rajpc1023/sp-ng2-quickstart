import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputOutputComponent } from './input-output.component';
import { Transaction } from '../tx/Transaction'

describe( 'InputOutputComponent', () => {

  let comp: InputOutputComponent,
      fixture: ComponentFixture<InputOutputComponent>,
      debugEl: DebugElement,
      expectedTx: Transaction,
      mainEl: HTMLElement;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ InputOutputComponent ]
    } ).compileComponents();

  } ) );

  beforeEach( () => {

    fixture = TestBed.createComponent( InputOutputComponent );
    comp = fixture.componentInstance;
    debugEl = fixture.debugElement.query( By.css( 'ul' ) );
    mainEl = debugEl.nativeElement;
    expectedTx = new Transaction( {
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
    } );

    comp.tx = expectedTx;
    fixture.detectChanges();
  } );

  // Did the pipe work?
  // We are testing this in a more detailed fashion, note the use of Math.abs()
  it( 'should display the amount correctly', () => {
    expect( mainEl.textContent ).toContain( '-$' + Math.abs(expectedTx.amount) );
  } );

  it('should fire a custom event when the button is clicked', () => {
    let txToBeRefreshed: Transaction;
    comp.refresh.subscribe((tx: Transaction) => txToBeRefreshed = tx);

    // debugEl is the entire unordered list (<ul/>) which is not where we want
    // to register the click. We want to click on the button, so we fetch
    // the button specifically
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(txToBeRefreshed).toBe(expectedTx)
  });

  // How about the sub-object (the composed Payee)?
  it( 'should display the payee name', () => {
    expect( mainEl.textContent ).toContain( 'Goodman, Lieber', 'missing text' );
  } );

} );
