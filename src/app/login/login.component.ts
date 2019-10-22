import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() user = new EventEmitter <{username: string, password: string, ref: Router}>();
  inputUser = '';
  inputPass = '';
  status = false;
  err = false;
  constructor(private router: Router, private route: ActivatedRoute) { }
  onCheck(event: boolean) {
    if (event === true) {
      this.router.navigate(['mainPage']).then(() => {
        this.user.emit({username: this.inputUser, password: this.inputPass, ref: this.router});
      });
    }
    setTimeout(() => {this.status = false; this.err = event === true ? false : true; }, 1000);
  }
  ngOnInit() {
  }

}
