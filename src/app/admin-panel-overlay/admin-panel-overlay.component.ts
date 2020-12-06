import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-panel-overlay',
  templateUrl: './admin-panel-overlay.component.html',
  styleUrls: ['./admin-panel-overlay.component.css']
})
export class AdminPanelOverlayComponent {

  @Output() hideOverlay: EventEmitter<any> = new EventEmitter()

  onBackClick() {
    this.hideOverlay.emit();
  }

  stopPropagation(e: any) {
    e.stopPropagation()
  }

}