import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
  constructor(public router:Router) { }
  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();

  }
  addAdmins(){
    this.router.navigate(['/addPages']);
  }
}
