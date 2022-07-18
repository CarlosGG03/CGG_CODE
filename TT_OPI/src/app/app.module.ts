import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { DatatableComponent } from './Componetes/datatable/datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
