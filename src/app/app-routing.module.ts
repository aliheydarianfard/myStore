
import { MasterPageRoutingModule } from './modules/master-page/master-page-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPageComponent } from './modules/master-page/master-page.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
  },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
