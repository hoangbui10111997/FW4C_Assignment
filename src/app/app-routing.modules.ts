import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
const routes: Routes = [
  {path: 'mainPage', component: MainpageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules {}
export const routingComponents = [MainpageComponent]
