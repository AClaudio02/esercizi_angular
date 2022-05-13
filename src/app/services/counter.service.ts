import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _counter = 0;

  get counter(): number {
    return this._counter;
  }


  showCounter() {
    console.log(`Valore iniziale: ${this._counter}`);
  }
  add(number:number) {
    this._counter += number;
    console.log(`Somma: ${this.counter}`);
  }
  sub(number: number) {
    this._counter -= number;
    if (this.counter < 0) {
      console.error('Il counter non può essere minore di zero!');
      this._counter += number;
    } else {
      console.log(`Sottrazione: ${this._counter}`);
    }
  }
  constructor() {}
}
