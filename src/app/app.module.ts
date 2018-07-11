import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomerComponent } from '../app/Components/CustomerComponent';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent ]
})
export class AppModule { }
