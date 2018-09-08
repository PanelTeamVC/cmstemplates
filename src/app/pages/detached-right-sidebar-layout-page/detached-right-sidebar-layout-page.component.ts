import { Component, OnInit } from '@angular/core';
import { DatawebService } from '../../services/dataweb.service';
import { Template } from '../../models/items';
import { Data } from '@angular/router';

@Component({
  selector: 'app-detached-right-sidebar-layout-page',
  templateUrl: './detached-right-sidebar-layout-page.component.html',
  styleUrls: ['./detached-right-sidebar-layout-page.component.scss']
})
export class DetachedRightSidebarLayoutPageComponent implements OnInit {

  templates: Template[];

  constructor( private templateService: DatawebService) { }

  ngOnInit() {
    // this.templateService.getFelicitaciones(sc).subscribe(templates => {
    //   this.templates = templates;
    // })
  }

}
