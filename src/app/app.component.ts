import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url;
  title = 'Login-Assignment';
  username = '';
  onLogin(user: {username: string, password: string, ref: Router}) {
    console.log(user.username);
    console.log(user.ref.url);
    this.url = user.ref.url;
    this.username = user.username;
  }
}
