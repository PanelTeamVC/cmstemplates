import { Routes, RouterModule } from '@angular/router';

export const ESTABLECIDASESIKA_ROUTES: Routes = [
    {
        path: 'establecidasesika/:sc',
        loadChildren: './pages/establecidasesika-layout-page/establecidasesika-layout-page.module#establecidasesikaLayoutPagesModule'
    }
];