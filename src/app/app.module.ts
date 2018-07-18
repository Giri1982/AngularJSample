import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomerComponent } from '../app/Components/CustomerComponent';
import {GridComponent} from '../app/Components/GridComponent';

@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
