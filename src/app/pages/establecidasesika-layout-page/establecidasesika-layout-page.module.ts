import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { establecidasesikaLayoutPagesRoutingModule } from "./establecidasesika-layout-page-routing.module";
import { establecidasesikaLayoutPageComponent, SafePipe  } from './establecidasesika-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        establecidasesikaLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        establecidasesikaLayoutPageComponent,
        SafePipe
    ]
})
export class establecidasesikaLayoutPagesModule { }
