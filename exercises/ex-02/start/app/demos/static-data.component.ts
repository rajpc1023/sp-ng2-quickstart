import { Component, OnInit } from '@angular/core';
import { StaticDataService } from './static-data.provider';

@Component( {
  moduleId: module.id,
  selector: 'static-data',
  template: `<h2>Demo: Providers and Services</h2>
<p>The name of the service is <strong>{{ serviceName }}</strong></p>
<p>The result of adding 10 and 10 is <strong>{{ result }}</strong></p>`
} )
export class DemoStaticDataComponent implements OnInit {
  serviceName: string;
  result: number;

  constructor( private service: StaticDataService ) {
  }

  ngOnInit() {
    this.serviceName = this.service.getServiceName();
    this.result = this.service.add( 10, 10 );
  }
}
