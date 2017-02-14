import { Component } from '@angular/core';

@Component( {
  moduleId: module.id,
  selector: 'pipes-demo',
  template: `
<ul>
<li>Amount: {{ amount|currency:'USD':true }}</li>
<li>Date: {{ today|date:'yyyy-MM-dd' }}</li>
</ul>
`
} )
export class PipesDemoComponent {
  amount: number = 50;
  today: Date = new Date();
}
