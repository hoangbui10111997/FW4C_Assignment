import {EventEmitter} from '@angular/core';
import {LoginModel} from './login.model';

export class LoginService {
  checkUser = new EventEmitter<{username: string, password: string}>();
  checkedUser = new EventEmitter<{user: string, allow: boolean}>();
  public username;
}
