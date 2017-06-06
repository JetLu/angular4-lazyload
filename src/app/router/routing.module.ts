import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HelloComponent } from '../hello/hello.component';
import { ContactModule } from '../contact/contact.module'

export function loadBundledModule() { return ContactModule; }

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'contact',
    loadChildren: loadBundledModule
  },
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
