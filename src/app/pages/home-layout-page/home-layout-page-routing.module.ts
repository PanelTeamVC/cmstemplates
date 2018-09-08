import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutPageComponent } from './home-layout-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutPageComponent,
    data: {
      title: 'home'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoColumnsLayoutPagesRoutingModule { }
