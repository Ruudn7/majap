import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login-form/login-form.component').then(m => m.LoginFormComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./components/profile-form-container/profile-form-container.component').then(m => m.ProfileFormContainerComponent)
    }
];
