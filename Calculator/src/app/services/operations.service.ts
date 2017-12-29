import { Injectable } from '@angular/core';
import { Methods } from './../core/consts';

@Injectable()
export class OperationsService {
  public sqRoot = (total: number) => Math.sqrt(total);
  public equals = (value: string): string => eval(value);
}
