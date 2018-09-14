import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { nuevasesikaLayoutPagesRoutingModule } from "./nuevasesika-layout-page-routing.module";
import { nuevasesikaLayoutPageComponent, SafePipe  } from './nuevasesika-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        nuevasesikaLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        nuevasesikaLayoutPageComponent,
        SafePipe
    ]
})
export class nuevasesikaLayoutPagesModule { }
