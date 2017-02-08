import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component( {
  moduleId   : module.id,
  selector   : 'page-not-found',
  templateUrl: 'page-not-found.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
} )
export class PageNotFoundComponent implements OnInit {
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
  }


}
