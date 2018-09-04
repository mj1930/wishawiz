import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProviderComponent } from './provider/provider.component';

export const routes: Routes = [
  
    {
    path: '',
    component: HomeComponent
    },
    {
    path: 'provider',
    component: ProviderComponent 
    },

];
