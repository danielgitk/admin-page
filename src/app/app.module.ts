import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlockCreateComponent } from './block/block-create/block-create.component';
import { BlockListComponent } from './block/block-list/block-list.component';
import { PageCreateComponent } from './page/page-create/page-create.component';
import { PageListComponent } from './page/page-list/page-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { ToastsComponent } from './toasts/toasts.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinkComponent } from './input/link/link.component';
import { RteComponent } from './input/rte/rte.component';
import { ItemComponent } from './media/item/item.component';
import { EditComponent } from './media/edit/edit.component';
import { ListComponent } from './media/list/list.component';
import { MediaComponent } from './media/page/media.component';
import { PickerComponent } from './media/picker/picker.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PanelWrapperComponent } from './panel-wrapper/panel-wrapper.component';
import { PanelListComponent } from './panel-list/panel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    BlockCreateComponent,
    BlockListComponent,
    PageCreateComponent,
    PageListComponent,
    UserCreateComponent,
    UserListComponent,
    FooterComponent,
    ToastsComponent,
    LoginComponent,
    DashboardComponent,
    LinkComponent,
    RteComponent,
    ItemComponent,
    EditComponent,
    ListComponent,
    MediaComponent,
    PickerComponent,
    PanelWrapperComponent,
    PanelListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
