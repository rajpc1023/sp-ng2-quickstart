import { Component } from '@angular/core';

@Component( {
  moduleId: module.id,
  selector: 'demo-ngmodel',
  template: `
<div class="col-md-6">
  <div class="form-group">
    <label for="person-name">Enter your name:</label>
    <input [(ngModel)]="personName" type="text" class="form-control" id="person-name">
  </div>
</div>
<div class="col-md-6"><p>Your name is {{ personName }}</p></div>
`
} )
export class DemoNgModelComponent {
  personName: string;
}
