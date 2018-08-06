import { Component, OnInit } from '@angular/core';
import { DatawebService} from '../../services/dataweb.service';
import { Template } from '../../models/items';
@Component({
  selector: 'app-detached-left-sidebar-layout-page',
  templateUrl: './detached-left-sidebar-layout-page.component.html',
  styleUrls: ['./detached-left-sidebar-layout-page.component.scss']
})
export class DetachedLeftSidebarLayoutPageComponent implements OnInit {

  templates: Template[];
  
  constructor(private templateService: DatawebService) { }

  ngOnInit() {
    this.templateService.getGestion().subscribe(templates =>{
    this.templates = templates;
    })       
  }

 

}
