import { Injectable } from '@angular/core';

@Injectable()
export class MemoryService {

  private memoryValue: number;

  public set saveToMemory(value: number) {
    if (!isNaN(value)) {
      this.memoryValue = value;
      console.log(this.memoryValue);
    }
  }

  public get readFromMemory(): number {
    return this.memoryValue;
  }

  public addInMemory(value: number) {
    this.memoryValue += value;
    console.log(this.memoryValue);
  }

  public subtractInMemory(value: number) {
    this.memoryValue -= value;
    console.log(this.memoryValue);
  }

  public clearMemory() {
    this.memoryValue = null;
  }
}
