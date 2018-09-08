import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detached-left-sidebar-layout',
  templateUrl: './nuevasesika-layout.component.html',
  styleUrls: ['./nuevasesika-layout.component.scss']
})
export class nuevasesikaLayoutComponent implements OnDestroy {
  
    constructor(private renderer: Renderer2) {
      this.renderer.addClass(document.body, 'app-detached-left-sidebar');
      this.renderer.setAttribute(document.body, 'data-col', 'app-detached-left-sidebar');
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, 'app-detached-left-sidebar');
      // this.renderer.removeAttribute(document.body, 'data-col');
    }
}
