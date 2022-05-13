import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _counter = 0;

  get counter() {
    return this._counter;
  }
  set counter(counter) {
    counter = this._counter;
  }

  showCounter() {
    console.log(`Valore iniziale: ${this.counter}`);
  }
  add(number: number) {
    this.counter += number;
    console.log(`Somma: ${this.counter}`);
  }
  sub(number: number) {
    this.counter -= number;
    if (this.counter < 0) {
      console.error('Il counter non può essere minore di zero!');
      this.counter += number;
    } else {
      console.log(`Sottrazione: ${this.counter}`);
    }
  }
  constructor() {}
}
