import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSubject =  new BehaviorSubject<number>(0);

  showCounter() {
    return this.counterSubject.getValue();
  }
  add(number:number) {
    this.counterSubject.subscribe();
    this.counterSubject.next(this.counterSubject.getValue() + number);
    return console.log(`Addizione: ${this.counterSubject.getValue()}`);

  };
  sub(number:number) {
    this.counterSubject.subscribe();
    this.counterSubject.next(this.counterSubject.getValue() - number);
      if (this.counterSubject.getValue() < 0) {
        console.error('Il counter non può essere minore di zero!');
        this.counterSubject.next(this.counterSubject.getValue() + number);

      } else {
        console.log(`Sottrazione: ${this.counterSubject.getValue()}`);

      }
  }; 
  constructor() {}
}
