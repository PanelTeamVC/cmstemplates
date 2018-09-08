import { Component, OnInit } from '@angular/core';
  import { DatawebService} from '../../services/dataweb.service';
  import { Template } from '../../models/items';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detached-left-sidebar-layout-page',
  templateUrl: './establecidasesika-layout-page.component.html',
  styleUrls: ['./establecidasesika-layout-page.component.scss']
})

export class establecidasesikaLayoutPageComponent implements OnInit {

  templates: Template[];
  subcate: string;

  constructor(
    private route: ActivatedRoute,
    private templateService: DatawebService
  ) { }

  ngOnInit() {


    // this.templateService.getEstablecidas().subscribe( templates  =>{
    // //console.log(templates);
    // this.templates = templates;
    // });

    this.route.params
          .subscribe( parametros => {
          // console.log(parametros['sc']);
          this.templateService.getEstablecidasEsika(parametros['sc'])
                              .subscribe( templates  =>{
                                this.subcate = parametros['sc'];
                                this.templates = templates;
                                //console.log(templates);
                              });
                              
                            });
 
  }




}
