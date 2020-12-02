import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { ViewPagesComponent } from './view-pages/view-pages.component';

const routes: Routes = [
  {path: '', component: ViewPagesComponent},
  {path: 'addPages', component: AddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
