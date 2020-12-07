import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;

  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // this.sidenavToggle.emit();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  logout() {
    localStorage.removeItem("token");

    this.router.navigate(["login"]);
  }

}
