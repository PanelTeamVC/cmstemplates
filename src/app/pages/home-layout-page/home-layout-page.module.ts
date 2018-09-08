import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { TwoColumnsLayoutPagesRoutingModule } from "./home-layout-page-routing.module";
import { HomeLayoutPageComponent } from './home-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        TwoColumnsLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        HomeLayoutPageComponent
    ]
})
export class TwoColumnsLayoutPagesModule { }
