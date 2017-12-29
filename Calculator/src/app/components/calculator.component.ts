import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OperationsService, MemoryService } from './../services';
import { Methods, ErrorMessages } from './../core/consts';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  private inputArray :any[] = [];

  private values: number[] = [];
  private currentMethod: Methods;
  public displayValue: any = '';
  public result: number;

  constructor(private operation: OperationsService, private memory: MemoryService) { }

  public updateExpression(value: string) {
    this.inputArray.push(value);
    this.displayValue = this.inputArray.join('');
  }

  private resetInputs () {
    this.inputArray = [];
  }

  public equals() {
    this.displayValue = `${this.operation.equals(this.displayValue)}`
  }


  public calculate(method) {
    switch (method) {
      case Methods[Methods.sqRoot]:
        this.displayValue = `${this.operation.sqRoot(+this.inputArray[this.inputArray.length - 1])}`;
        this.resetInputs();
        break;
      default:
        break;
    }
  }


  public toggleSign() {
    // TODO
    // let lastInput = this.inputArray[this.inputArray.length - 1]);
    // let lastInputArr = [...lastInput];
    // if (lastInputArr.length === 1) {
    //   lastInput = +lastInput;
    // } else {
    //   lastInput = lastInputArr.filter(item => item !== '(' && item !== ')').join('');
    // }
    //
    // if (lastInput > 0) {
    //   this.inputArray.splice(this.inputArray.length - 1,1,`(${lastInput*(-1)})`);
    // } else {
    //   this.inputArray.splice(this.inputArray.length - 1,1,lastInput*(-1));
    // }
  }

  public memorySettingHandler () {
    if (this.memory.readFromMemory) {
      this.memory.addInMemory(+this.operation.equals(this.displayValue));
    } else {
      this.equals();
      this.memory.saveToMemory = +this.operation.equals(this.displayValue);
      this.resetInputs();
    }
  }

  public readFromMemory() {
    this.memory.readFromMemory ? this.displayValue = `${this.memory.readFromMemory}` : ErrorMessages.MemoryEmpty;
    this.resetInputs();
  }

  public memorySubtract() {
    if (!this.memory.readFromMemory) {
      return;
    }
    this.memory.subtractInMemory(+this.operation.equals(this.displayValue));
  }

  public clear() {
    this.displayValue = '';
    this.resetInputs();
  }

  public clearAll() {
    this.clear();
    this.memory.clearMemory();
  }

  public clearMemory() {
    this.memory.clearMemory();
  }
}
