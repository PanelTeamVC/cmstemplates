
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SemiDarkLayoutComponent } from './layouts/semi-dark-layout/semi-dark-layout.component';
import { DarkLayoutComponent } from './layouts/dark-layout/dark-layout.component';
import { LightLayoutComponent } from './layouts/light-layout/light-layout.component';
import { StaticLayoutComponent } from './layouts/static-layout/static-layout.component';
import { BoxedLayoutComponent } from './layouts/boxed-layout/boxed-layout.component';
import { FixedLayoutComponent } from './layouts/fixed-layout/fixed-layout.component';
import { FixedNavbarFooterLayoutComponent } from './layouts/fixed-navbar-footer-layout/fixed-navbar-footer-layout.component';
import { FixedNavbarNavigationLayoutComponent } from './layouts/fixed-navbar-navigation-layout/fixed-navbar-navigation-layout.component';
import { FixedNavigationLayoutComponent } from './layouts/fixed-navigation-layout/fixed-navigation-layout.component';
import { FixedNavbarLayoutComponent } from './layouts/fixed-navbar-layout/fixed-navbar-layout.component';
import { DetachedRightSidebarLayoutComponent } from './layouts/detached-right-sidebar-layout/detached-right-sidebar-layout.component';
import { DetachedStickyRightSidebarLayoutComponent } from './layouts/detached-sticky-right-sidebar-layout/detached-sticky-right-sidebar-layout.component';
import { DetachedStickyLeftSidebarLayoutComponent } from './layouts/detached-sticky-left-sidebar-layout/detached-sticky-left-sidebar-layout.component';
import { OneColumnLayoutComponent } from './layouts/1-column-layout/1-column-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

/**Pages */
import { establecidasesikaLayoutComponent } from './layouts/establecidasesika-layout/establecidasesika-layout.component';
import { nuevasesikaLayoutComponent } from './layouts/nuevasesika-layout/nuevasesika-layout.component';

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';

import * as $ from 'jquery';

/**Servicios */
import { DatawebService } from './services/dataweb.service';

/*Firebase*/ 
import { AngularFireModule } from 'angularfire2'; //Referencia utliza configuracion
import { environment } from "../environments/environment";
//import { AngularFireDatabaseModule } from 'angularfire2/database'; //Utilizar la BD
import { AngularFirestoreModule }  from 'angularfire2/firestore';
import { AngularFireStorageModule }  from 'angularfire2/storage';
import { AngularFireAuthModule }  from 'angularfire2/auth';






@NgModule({
    declarations: [
        AppComponent,
        OneColumnLayoutComponent,
        HomeLayoutComponent,
        establecidasesikaLayoutComponent,
        nuevasesikaLayoutComponent,
        DetachedStickyLeftSidebarLayoutComponent,
        DetachedStickyRightSidebarLayoutComponent,
        DetachedRightSidebarLayoutComponent,
        FixedNavbarLayoutComponent,
        FixedNavigationLayoutComponent,
        FixedNavbarNavigationLayoutComponent,
        FixedNavbarFooterLayoutComponent,
        FixedLayoutComponent,
        BoxedLayoutComponent,
        StaticLayoutComponent,
        LightLayoutComponent,
        DarkLayoutComponent,
        SemiDarkLayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        HttpModule,
        AppRoutingModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
        //AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        NgbModule.forRoot()
    ],
    providers: [
        AuthService,
        AuthGuard,
        DatawebService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }