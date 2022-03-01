import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './components/view/view.component';

const appRoutes: Routes = [

    { path: '', component: ViewComponent },
    { path: 'vista-clientes', component: ViewComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);