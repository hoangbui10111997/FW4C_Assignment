import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  @Input() username;
  @Input() password;
  @Output() status = new EventEmitter<boolean>();
  correctUsername = 'Hoang';
  correctPassword = '123';
  constructor() { }
  ngOnInit() {
    if (this.correctUsername === this.username && this.correctPassword === this.password) {
      this.status.emit(true);
    } else {
      this.status.emit(false);
    }
  }

}
