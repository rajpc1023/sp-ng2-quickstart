"use strict";
var __decorate = (this && this.__decorate) || function( decorators, target, key, desc ) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor( target, key ) : desc, d;
    if ( typeof Reflect === "object" && typeof Reflect.decorate === "function" ) r = Reflect.decorate( decorators, target, key, desc );
    else for ( var i = decorators.length - 1; i >= 0; i-- ) if ( d = decorators[ i ] ) r = (c < 3 ? d( r ) : c > 3 ? d( target, key, r ) : d( target, key )) || r;
    return c > 3 && r && Object.defineProperty( target, key, r ), r;
  };
var __metadata = (this && this.__metadata) || function( k, v ) {
    if ( typeof Reflect === "object" && typeof Reflect.metadata === "function" ) return Reflect.metadata( k, v );
  };
var core_1 = require( "@angular/core" );
var people_local_dao_provider_1 = require( "./people-local-dao.provider" );
var SortingDataComponent = (function() {
  function SortingDataComponent( dao ) {
    this.dao = dao;
  }

  SortingDataComponent.prototype.ngOnInit = function() {
    var _this = this;
    this.dao.query()
      .then( function( people ) {
        return _this.people = people;
      } );
  };
  return SortingDataComponent;
}());
SortingDataComponent = __decorate( [
  core_1.Component( {
    moduleId: module.id,
    selector: 'sort-data',
    template: "\n<table class=\"table\">\n<thead>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n</thead>\n<tbody>\n  <tr *ngFor=\"let person of people; let isEven = even\"\n      [style.backgroundColor] = 'isEven ? \"gray\" : \"white\"'>\n    <td>{{ person.name }}</td>\n    <td>{{ person.age }}</td>\n  </tr>\n</tbody>\n</table>\n"
  } ),
  __metadata( "design:paramtypes", [ people_local_dao_provider_1.PeopleLocalDAO ] )
], SortingDataComponent );
exports.SortingDataComponent = SortingDataComponent;
//# sourceMappingURL=sorting-data.component.js.map
