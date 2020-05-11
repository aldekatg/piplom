import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CotlCalcComponent} from './cotl-calc/cotl-calc.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'cotl_calc',
    component: CotlCalcComponent
  }
];
