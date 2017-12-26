import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OperationsService } from './services';
import { Methods } from './core/consts';

@Component({
  selector: 'c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public displayValue = '';
  private method: Methods;
  private oldValue: number;
  private newValue: number;

  constructor(private operation: OperationsService) { }

  public concatenateValue(value: string) {
    return this.displayValue = `${this.displayValue}${value}`;
  }

  public setMethod(method: string) {
    this.storeNumberValues('older');
    this.resetScreen();

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
    this.storeNumberValues(null, 'newer');
    const values = {
      currentValue: this.oldValue,
      method: this.method,
      newValue: this.newValue
    }
    this.displayValue = this.operation.equals(values).toString();
  }

}
