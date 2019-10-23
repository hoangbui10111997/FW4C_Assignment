import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  @ViewChild('alert', {static: true}) alert: ElementRef;
  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.checkedUser.subscribe(
      ({user, allow}) => {
        if (allow === true) {
          this.loginService.username = user;
          this.router.navigate(['mainPage']);
        } else {
          console.log(allow);
          this.alert.nativeElement.textContent = 'Wrong Username or Password!';
        }
      }
    );
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.username === '' || this.password === '') {
      this.alert.nativeElement.textContent = 'Username and Password is required!';
    } else {
      this.loginService.checkUser.emit({username: this.username, password: this.password});
    }
  }
}
