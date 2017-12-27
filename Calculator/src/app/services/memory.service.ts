import { Injectable } from '@angular/core';

@Injectable()
export class MemoryService {

  //save to memroy ()
  //read from memory()
  //add new value to memory val()
  //subtract from new val from memory val()
private memoryValue: number;

  public set saveToMemory(value:number) {
    this.memoryValue = value;
    console.log(this.memoryValue);
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

  public clearMemory(){
    this.memoryValue = null;
  }



}
