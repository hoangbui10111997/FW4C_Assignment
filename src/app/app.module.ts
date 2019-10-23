import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import {LoginService} from './login/login.service';
import {FormsModule} from '@angular/forms';

const appRouters: Routes = [
  {path: '', component: LoginComponent},
  {path: 'mainPage', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
