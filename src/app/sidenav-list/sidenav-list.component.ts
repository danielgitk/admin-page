import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faImages,
  faCookieBite,
  faBook,
  faThLarge,
  faHome,
  faSignOutAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {

  @Output() sidenavClose = new EventEmitter();
  mainIcon = faCookieBite;
  mediaIcon = faImages;
  pagesIcon = faBook;
  blocksIcon = faThLarge;
  layoutIcon = faHome;
  logoutIcon = faSignOutAlt;
  usersIcon = faUsers;
  constructor(public router:Router) { }
  
  public onSidenavClose = () => {
    this.sidenavClose.emit();

  }
  logout() {
    localStorage.removeItem("token");

    this.router.navigate(["login"]);
  }

 
}
