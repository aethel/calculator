import { Injectable } from '@angular/core';
import { Methods } from './../core/consts';

@Injectable()
export class OperationsService {

// public add = (total: number, num: number) => total + num;
// public subtract = (total: number, num: number) => total - num;
// public multiply = (total: number, num: number) => total * num;
// public divide = (total: number, num: number) => total / num;
public sqRoot = (total: number) => Math.sqrt(total);
public equals = (value:string) :string => eval(value);
  // public equals(currentValue: number, method: Methods, value: number): number {
  // public equals(values): number {
  //   let updatedValue: number;
  //   const {currentValue, method, newValue} = values;
  //   switch (method) {
  //     case Methods.add:
  //       updatedValue = OperationsService.add(currentValue, newValue);
  //       break;
  //     case Methods.subtract:
  //       updatedValue = OperationsService.subtract(currentValue, newValue);
  //       break;
  //     case Methods.multiply:
  //       updatedValue = OperationsService.multiply(currentValue, newValue);
  //       break;
  //     case Methods.divide:
  //       updatedValue = OperationsService.divide(currentValue, newValue);
  //       break;
  //     case Methods.sqRoot:
  //       updatedValue = OperationsService.sqRoot(currentValue);
  //       break;
  //   }
  //   return updatedValue;
  // }
}
