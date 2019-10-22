import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingComponents, AppRoutingModules} from './app-routing.modules'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ValidateComponent } from './validate/validate.component';
import {RouterModule} from '@angular/router';
// import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidateComponent,
    routingComponents
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
