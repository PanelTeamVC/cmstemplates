import { Component, OnInit } from '@angular/core';
import { DatawebService } from '../../services/dataweb.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
    constructor ( public _dw:DatawebService){}
   
    ngOnInit() {
      
    }
}
