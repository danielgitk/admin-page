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
import { MediaComponent } from './media/media/media.component';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LaioutComponent } from './layout/laiout/laiout.component';
// import { MediaComponent } from './media/page/media.component';

const routes: Routes = [
 {path: '',canLoad: [AuthGuard], component: DashboardComponent},
 {path: 'login', component: LoginComponent,canActivate: [GuestGuard]},
 {path: 'blocks/create', component: BlockCreateComponent},
 {path: 'pages/create' , component: PageCreateComponent},
 {path: 'pages/list' ,component: PageListComponent},
 {path: 'blocks/list', component: BlockListComponent},
 {path: 'dashboard', component:DashboardComponent},
 {path: 'media', component: MediaComponent},
 {path: 'layout',component:LayoutComponent},
 {path: 'users/list', component:UserListComponent},
 {path: 'users/create',component:UserCreateComponent},
 {path: 'users/:userId', component: UserCreateComponent},
 {path: 'laiout', component: LaioutComponent},
 {path: 'pages/:pageId' , component: PageCreateComponent},
 {path: 'blocks/:blockId', component: BlockCreateComponent}
 

 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, GuestGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
