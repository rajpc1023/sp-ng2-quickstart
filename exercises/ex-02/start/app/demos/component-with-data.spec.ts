import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComponentWithDataComponent } from './component-with-data';

describe( 'ComponentWithDataComponent (inline template)', () => {

  let comp: ComponentWithDataComponent,
      fixture: ComponentFixture<ComponentWithDataComponent>,
      debugEl: DebugElement,
      mainEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentWithDataComponent]
    });

    fixture = TestBed.createComponent(ComponentWithDataComponent);
    comp = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('ul'));
    mainEl = debugEl.nativeElement;

  });

  // Did the pipe work?
  it('should display the amount with a dollar sign', () => {
    fixture.detectChanges();
    expect(mainEl.textContent).toContain('$');
  });

  // How about the sub-object (the composed Payee)?
  it('should display the payee name', () => {
    fixture.detectChanges();
    expect(mainEl.textContent).toContain('Medical Partners', 'missing text');
  });

});
