import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockCreateComponent } from './block/block-create/block-create.component';
import { LoginComponent } from './login/login.component';
import { PageCreateComponent } from './page/page-create/page-create.component';
import { UserCreateComponent } from './user/user-create/user-create.component';


const routes: Routes = [
 {path: '', component: UserCreateComponent},
 {path: 'login', component: LoginComponent},
 {path: 'block/create', component: BlockCreateComponent},
 {path: 'page/create' , component: PageCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
