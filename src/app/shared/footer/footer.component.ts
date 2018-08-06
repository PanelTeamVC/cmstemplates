import { Component, HostBinding } from '@angular/core';
import { DatawebService } from '../../services/dataweb.service';

@Component({
    // moduleId: module.id,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent{
    currentDate : Date = new Date();

    constructor( public _dw:DatawebService){}
}
