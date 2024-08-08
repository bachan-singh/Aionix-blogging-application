import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleOpenedComponent } from './shared/article-opened/article-opened.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', component: HomeComponent },

  { path: 'article/:id', component:ArticleOpenedComponent},
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
