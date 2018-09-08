import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { nuevasesikaLayoutPageComponent } from './nuevasesika-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: nuevasesikaLayoutPageComponent,
    data: {
      title: 'nuevasesika-layout'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class nuevasesikaLayoutPagesRoutingModule { }
