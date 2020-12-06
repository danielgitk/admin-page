import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockCreateComponent } from './block/block-create/block-create.component';
import { BlockListComponent } from './block/block-list/block-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageCreateComponent } from './page/page-create/page-create.component';
import { PageListComponent } from './page/page-list/page-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { GuestGuard } from "../app/login/guest.guard";
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
 {path: '',canLoad: [AuthGuard], component: UserCreateComponent},
 {path: 'login', component: LoginComponent,canActivate: [GuestGuard]},
 {path: 'blocks/create', component: BlockCreateComponent},
 {path: 'pages/create' , component: PageCreateComponent},
 {path: 'pages/list' ,component: PageListComponent},
 {path: 'blocks/list', component: BlockListComponent},
 {path: 'dashboard', component:DashboardComponent},
 {  path: ":pageId", component: PageCreateComponent
},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, GuestGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
