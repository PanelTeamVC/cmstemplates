import { Routes, RouterModule } from '@angular/router';

export const HOME_ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: './pages/home-layout-page/home-layout-page.module#TwoColumnsLayoutPagesModule'
    },
    {
        path: 'changelog',
        loadChildren: './changelog/changelog.module#ChangeLogModule'
    },
    {
        path: 'components',
        loadChildren: './components/ui-components.module#UIComponentsModule'
    },
];

