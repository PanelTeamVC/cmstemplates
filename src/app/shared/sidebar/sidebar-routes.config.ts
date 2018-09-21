import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'MAILS', icon: 'icon-ellipsis ft-minus', class: 'navigation-header', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: true, submenu: []
    },

    {
        path: '', title: 'Establecidas Ésika', icon: 'ft-zap', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: '/establecidasesika/lanzamientos', title: 'Lanzamientos', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidasesika/tops', title: 'Tops', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidasesika/felicitaciones', title: 'Felicitaciones', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidasesika/recordatorios', title: 'Recordatorios', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidasesika/gestion', title: 'Gestión', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidasesika/venta', title: 'Venta', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
     
            // {
            //     path: '', title: 'Lanz. y Tops', icon: '', class: 'menu-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
            //     submenu: [
            //         { path: '/felicitaciones-layout', title: 'Campaña 12', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            //         { path: '/detached-right-sidebar-layouts', title: 'Campaña 13', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            //         { path: '/detached-sticky-left-sidebar-layouta', title: 'Campaña 14', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            //         { path: '/detached-sticky-right-sidebar-layouta', title: 'Campaña 15', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            //         { path: '/detached-sticky-right-sidebar-layouta', title: 'Campaña 16', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            //         { path: '/detached-sticky-right-sidebar-layouta', title: 'Campaña 17', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            //         { path: '/detached-sticky-right-sidebar-layouta', title: 'Campaña 18', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            //     ]
            // },
          
         
            // { path: '/fixed-navbar-navigation-layout', title: 'Fixed navbar & navigation', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/fixed-navbar-footer-layout', title: 'Fixed navbar & footer', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/fixed-layout', title: 'Fixed layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/boxed-layout', title: 'Boxed layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/static-layout', title: 'Static layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/light-layout', title: 'Light layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/dark-layout', title: 'Dark layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/semi-dark-layout', title: 'Semi dark layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Nuevas Ésika', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [      
            { path: '/nuevasesika/lanzamientos', title: 'Lanzamientos', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevasesika/tops', title: 'Tops', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },  
            { path: '/nuevasesika/felicitaciones', title: 'Felicitaciones', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevasesika/recordatorios', title: 'Recordatorios', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevasesika/gestion', title: 'Gestión', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevasesika/packs', title: 'Packs', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevasesika/venta', title: 'Venta', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
     
        ]
    },
    {
        path: '', title: 'Establecidad L´Bel', icon: 'ft-zap', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [        
            { path: '/establecidaslbel/lanzamientos', title: 'Lanzamientos', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },   
            { path: '/establecidaslbel/tops', title: 'Tops', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidaslbel/felicitaciones', title: 'Felicitaciones', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidaslbel/recordatorios', title: 'Recordatorios', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidaslbel/gestion', title: 'Gestión', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/establecidaslbel/venta', title: 'Venta', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
     
       
            // { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Nuevas L´Bel ', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [        
            { path: '/nuevaslbel/lanzamientos', title: 'Lanzamientos', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },   
            { path: '/nuevaslbel/tops', title: 'Tops', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevaslbel/felicitaciones', title: 'Felicitaciones', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevaslbel/recordatorios', title: 'Recordatorios', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevaslbel/gestion', title: 'Gestión', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/nuevaslbel/venta', title: 'Venta', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            // { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    // {
    //     path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'nav-item has-sub', badge: '5', badgeClass: 'badge badge badge-primary badge-pill float-right mr-2', isExternalLink: false, isNavHeader: false,
    //     submenu: [
    //         { path: 'javascript:;', title: 'Second Level', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: true, isNavHeader: false, submenu: [] },
    //         {
    //             path: '', title: 'Second Level Child', icon: '', class: 'menu-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
    //             submenu: [
    //                 { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
    //                 { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: []
    // },
    {
        path: '', title: 'PUSH', icon: 'icon-ellipsis ft-minus', class: 'navigation-header', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: true, submenu: []
    },
    { path: '#', title: 'Establecidas', icon: 'ft-smartphone', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: true, isNavHeader: false, submenu: [] },
    { path: '#', title: 'Nuevas', icon: 'ft-smartphone', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: true, isNavHeader: false, submenu: [] },
    

];
