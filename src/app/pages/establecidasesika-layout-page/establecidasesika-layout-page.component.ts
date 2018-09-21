import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
  import { DatawebService} from '../../services/dataweb.service';
  import { Template } from '../../models/items';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


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
    private templateService: DatawebService,
    private modalService: NgbModal
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


  //Abrir modal
  openModal(customContent) {
    this.modalService.open(customContent, { windowClass: 'dark-modal', size: 'lg' });
  }




}
