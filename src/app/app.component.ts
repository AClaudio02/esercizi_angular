import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_esercizi';

  constructor(public counterService: CounterService) {
    this.counterService.showCounter();
    this.counterService.add(1);
    this.counterService.sub(2);
  }
}
