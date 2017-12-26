import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OperationsService } from './../services';
import { Methods } from './../core/consts';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  private method: Methods;
  private oldValue: number;
  private newValue: number;
  public displayValue = '';

  constructor(private operation: OperationsService) { }

  public concatenateValue(value: string) {    
    return this.displayValue = `${this.displayValue}${value}`;
  }

  public processCalculation(method: string) {
    !this.method ? this.storeNumberValues('older') : this.storeNumberValues(null, 'newer');
    this.setMethod(method);
    this.resetScreen();
  }

  private setMethod(method) {
    if (!method) {
      return;
    }
    switch (method) {
      case Methods[Methods.add]:
        this.method = Methods.add;
        break;
      case Methods[Methods.subtract]:
        this.method = Methods.subtract;
        break;
      case Methods[Methods.divide]:
        this.method = Methods.divide;
        break;
      case Methods[Methods.sqRoot]:
        this.method = Methods.sqRoot;
        this.updateCurrentValue()
        break;
      case Methods[Methods.multiply]:
        this.method = Methods.multiply;
        break;
      default:
        break;
    }
  }

  private resetScreen() {
    this.displayValue = '';
  }

  private storeNumberValues(older = null, newer = null) {
    older ? this.oldValue = +this.displayValue : this.newValue = +this.displayValue;
  }

  public updateCurrentValue() {
    const values = {
      currentValue: this.oldValue,
      method: this.method,
      newValue: this.newValue
    }
    this.displayValue = this.operation.equals(values).toString();
  }

  public clear() {
    this.displayValue = '';
    this.oldValue = null;
    this.newValue = null;
  }
}
