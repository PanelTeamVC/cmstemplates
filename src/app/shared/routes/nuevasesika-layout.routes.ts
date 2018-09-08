import { Routes, RouterModule } from '@angular/router';

export const NUEVASESIKA_ROUTES: Routes = [
    {
        path: 'nuevasesika/:sc',
        loadChildren: './pages/nuevasesika-layout-page/nuevasesika-layout-page.module#nuevasesikaLayoutPagesModule'
    }
];