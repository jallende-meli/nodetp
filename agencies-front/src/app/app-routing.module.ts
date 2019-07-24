import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AgenciesformComponent} from './agenciesform/agenciesform.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'agencies',
    component: AgenciesformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
