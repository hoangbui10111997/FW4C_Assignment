import { Component } from '@angular/core';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template';
  constructor(private loginService: LoginService) {
    this.loginService.checkUser.subscribe(
      ({username, password}) => this.onCheck(username, password)
    );
  }
  onCheck(username: string, password: string) {
    if (username === 'Hoang' && password === '123') {
      this.loginService.checkedUser.emit({user: username, allow: true});
    } else {
      this.loginService.checkedUser.emit({user: username, allow: false});
    }
  }

}
