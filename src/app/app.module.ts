import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { CounterComponent } from './counter/counter.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    CounterComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
