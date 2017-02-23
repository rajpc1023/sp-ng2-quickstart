import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsingTemplateComponent } from './using-template.component';

describe( 'UsingTemplateComponent (using a templateUrl)', () => {

  let comp: UsingTemplateComponent,
      fixture: ComponentFixture<UsingTemplateComponent>,
      debugEl: DebugElement,
      mainEl: HTMLElement;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ UsingTemplateComponent ]
    } ).compileComponents();

  } ) );

  beforeEach( () => {

    fixture = TestBed.createComponent( UsingTemplateComponent );
    comp = fixture.componentInstance;
    debugEl = fixture.debugElement.query( By.css( 'ul' ) );
    mainEl = debugEl.nativeElement;

  } );

  // Did the pipe work?
  it( 'should display the amount with a dollar sign', () => {
    fixture.detectChanges();
    expect( mainEl.textContent ).toContain( '$' );
  } );

  // How about the sub-object (the composed Payee)?
  it( 'should display the payee name', () => {
    fixture.detectChanges();
    expect( mainEl.textContent ).toContain( 'Goodman, Lieber', 'missing text' );
  } );

} );
