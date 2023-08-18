import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'parken',
    loadChildren: () => import('./parken/parken.module').then( m => m.ParkenPageModule)
  },
  {
    path: 'barrierefreiheit',
    loadChildren: () => import('./barrierefreiheit/barrierefreiheit.module').then( m => m.BarrierefreiheitPageModule)
  },
  {
    path: 'transport',
    loadChildren: () => import('./transport/transport.module').then( m => m.TransportPageModule)
  },
  {
    path: 'anschrift',
    loadChildren: () => import('./anschrift/anschrift.module').then( m => m.AnschriftPageModule)
  },
  {
    path: 'bahnhofservices',
    loadChildren: () => import('./bahnhofservices/bahnhofservices.module').then( m => m.BahnhofservicesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
