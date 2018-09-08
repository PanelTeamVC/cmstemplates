import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { establecidasesikaLayoutPageComponent } from './establecidasesika-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: establecidasesikaLayoutPageComponent,
    data: {
      title: 'establecidasesika-layout'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class establecidasesikaLayoutPagesRoutingModule { }
