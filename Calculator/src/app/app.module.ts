import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryService, OperationsService } from './services'

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [ MemoryService, OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
