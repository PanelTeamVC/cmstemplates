import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detached-left-sidebar-layout',
  templateUrl: './establecidasesika-layout.component.html',
  styleUrls: ['./establecidasesika-layout.component.scss']
})
export class establecidasesikaLayoutComponent implements OnDestroy {
  
    constructor(private renderer: Renderer2) {
      this.renderer.addClass(document.body, 'app-detached-left-sidebar');
      this.renderer.setAttribute(document.body, 'data-col', 'app-detached-left-sidebar');
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, 'app-detached-left-sidebar');
      // this.renderer.removeAttribute(document.body, 'data-col');
    }
  
  }
