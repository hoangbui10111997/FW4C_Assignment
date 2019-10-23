import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {LoginModel} from '../login/login.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.username = this.loginService.username;
  }

}
