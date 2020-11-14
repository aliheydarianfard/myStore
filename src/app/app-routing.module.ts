import { MasterPageRoutingModule } from './modules/master-page/master-page-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPageComponent } from './modules/master-page/master-page.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
