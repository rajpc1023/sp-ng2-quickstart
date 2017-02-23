import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServiceDependencyComponent } from './service-dependency.component';
import { Transaction } from '../tx/Transaction';
import { DemoTransactionsDAO } from './demo-tx-dao.provider';

describe( 'ServiceDependencyComponent', () => {

  let comp: ServiceDependencyComponent,
      fixture: ComponentFixture<ServiceDependencyComponent>,
      expectedTx: Transaction,
      txDAO: DemoTransactionsDAO,
      spy: any,
      debugEl: DebugElement,
      mainEl: HTMLElement;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ ServiceDependencyComponent ],
      providers   : [ DemoTransactionsDAO ]
    } ).compileComponents();

  } ) );

  beforeEach( () => {

    fixture = TestBed.createComponent( ServiceDependencyComponent );
    comp = fixture.componentInstance;

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
    txDAO = fixture.debugElement.injector.get( DemoTransactionsDAO );
    spy = spyOn( txDAO, 'findById' ).and.returnValue( Promise.resolve( expectedTx ) );

    debugEl = fixture.debugElement.query( By.css( 'ul' ) );
  } );

  it( 'should not show a tx before OnInit', () => {
    expect( debugEl ).toBeNull();
    expect( spy.calls.any() ).toBe( false, 'No calls to DAO yet' );
  } );

  it( 'should still not show a tx after component initialized', () => {
    fixture.detectChanges();
    expect( debugEl ).toBeNull();
    expect( spy.calls.any() ).toBe( true, 'findById called' );
  } );

  it( 'should show the transaction after findById() using async', async( () => {
    fixture.detectChanges();

    fixture.whenStable()
      .then( () => {
        fixture.detectChanges();
        debugEl = fixture.debugElement.query( By.css( 'ul' ) );
        expect( debugEl.nativeElement.textContent ).toContain( 'Goodman, Lieber' );
      } )
  } ) );

  it('should show the transaction after findById() using fakeAsync', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    debugEl = fixture.debugElement.query( By.css( 'ul' ) );
    expect( debugEl.nativeElement.textContent ).toContain( 'Goodman, Lieber' );
  }))
} );
