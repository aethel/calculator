import { Injectable } from '@angular/core';
import { Methods } from './../core/consts';

@Injectable()
export class OperationsService {

  static readonly add = (currentValue: number, value: number) => currentValue + value;
  static readonly subtract = (currentValue: number, value: number) => currentValue - value;
  static readonly multiply = (currentValue: number, value: number) => currentValue * value;
  static readonly divide = (currentValue: number, value: number) => currentValue / value;
  static readonly sqRoot = (value: number) => Math.sqrt(value);

  // public equals(currentValue: number, method: Methods, value: number): number {
  public equals(values): number | string {
    let updatedValue: number;
    const {currentValue, method, newValue} = values;
    switch (method) {
      case Methods.add:
        updatedValue = OperationsService.add(currentValue, newValue);
        break;
      case Methods.subtract:
        updatedValue = OperationsService.subtract(currentValue, newValue);
        break;
      case Methods.multiply:
        updatedValue = OperationsService.multiply(currentValue, newValue);
        break;
      case Methods.divide:
        updatedValue = OperationsService.divide(currentValue, newValue);
        break;
      case Methods.sqRoot:
        updatedValue = OperationsService.sqRoot(currentValue);
        break;
    }
    return updatedValue || 'Error';
  }
}
