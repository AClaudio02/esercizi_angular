import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  number = new FormControl(1);

  constructor(private counterService:CounterService) { }
  
  addNumber() {
    this.counterService.add(this.number.value);
  }
  
  subNumber() {
    this.counterService.sub(this.number.value);
  }
  ngOnInit(): void {
  }

}
