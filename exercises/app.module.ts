import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Greeting } from './greeting.component';

@NgModule( {
  imports     : [ BrowserModule, FormsModule ],
  declarations: [ Greeting ],
  bootstrap   : [ Greeting ]
} )
export class AppModule {
}
