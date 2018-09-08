import { Component, OnInit } from '@angular/core';
import { DatawebService} from '../../services/dataweb.service';
import { Template } from '../../models/items';

@Component({
  selector: 'app-2-columns-layout-page',
  templateUrl: './home-layout-page.component.html',
  styleUrls: ['./home-layout-page.component.scss']
})
export class HomeLayoutPageComponent implements OnInit {

  templates: Template[];
  
  constructor(private templateService: DatawebService) { }

  ngOnInit() {
    this.templateService.getGestion().subscribe(templates =>{
    this.templates = templates;
    })       
  }

}
