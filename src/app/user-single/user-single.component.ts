import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../user-list/models/IUser';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: IUser;
  @Input() index!: number;
  @Output() deleted = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  delete(index:number) {
    this.deleted.emit(index)
  }
}
