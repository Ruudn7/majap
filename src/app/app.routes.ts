import { Routes, CanActivateFn } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login-form/login-form.component').then(m => m.LoginFormComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./components/profile-form-container/profile-form-container.component').then(m => m.ProfileFormContainerComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./components/blog-page/blog-page.component').then(m => m.BlogPageComponent),
        canActivate: [authGuard]
    }
];
