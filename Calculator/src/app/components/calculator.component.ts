import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OperationsService, MemoryService } from './../services';
import { Methods, ErrorMessages } from './../core/consts';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  private values: number[] = [];
  private currentMethod: Methods;
  public displayValue: any = '';
  public result: number;

  constructor(private operation: OperationsService, private memory: MemoryService) { }

  public concatenateValue(value: string) {
    this.displayValue = `${this.displayValue}${value}`;
  }

  private updatePrerequisites(method: string) {
    this.currentMethod = Methods[method];
    this.values.push(+this.displayValue);
    this.resetScreen();
  }

  private calculate(method) {
    switch (method) {
      case Methods.add:
        this.result = this.values.reduce(this.operation.add)
        break;
      case Methods.subtract:
        this.result = this.values.reduce(this.operation.subtract)
        break;
      case Methods.divide:
        this.result = this.values.reduce(this.operation.divide)
        break;
      case Methods.sqRoot:
        this.result = this.operation.sqRoot(this.values[0]);
        break;
      case Methods.multiply:
        this.result = this.values.reduce(this.operation.multiply)
        break;
      default:
        break;
    }
    console.log(this.result);
  }

  private resetScreen() {
    this.displayValue = '';
  }

  private resetValues() {
    this.values = Array.from(+this.displayValue);
  }

  public updateCurrentValue() {
    this.values.push(+this.displayValue);
    this.calculate(this.currentMethod);
    this.displayValue = this.result;
    this.resetValues()
  }

  public clear() {
    this.displayValue = '';
    this.values = [];
  }

  public toggleSign() {
    this.displayValue = (+this.displayValue * (-1));
  }

  public memorySettingHandler() {
    if (this.memory.readFromMemory) {
      this.memory.addInMemory(+this.displayValue);
    } else {
      this.memory.saveToMemory = +this.displayValue;
    }
  }

  public readFromMemory() {
    this.memory.readFromMemory ? this.displayValue = `${this.memory.readFromMemory}` : ErrorMessages.MemoryEmpty;
  }

  public memorySubtract() {
    if (!this.memory.readFromMemory) {
      return;
    }
    this.memory.subtractInMemory(+this.displayValue);
  }

  public clearAll() {
    this.clear();
    this.memory.clearMemory();
  }

  public clearMemory() {
    this.memory.clearMemory();
  }
}
