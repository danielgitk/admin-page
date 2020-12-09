import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { RequestService } from '../request.service';

@Component({
  selector: 'admin-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent {
  @Input() items: any;
  @Input() model: string;
  @Input() hideEdit =  false;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  deleteIcon = faTrashAlt;

  constructor(private http: RequestService, private router: Router) {}

  /**
   * On edit click
   *
   * @param e
   * @param id
   */
  onEdit(e: MouseEvent, id: string) {
    e.preventDefault();
    this.router.navigate([this.model, id]);
  }

  /**
   * On destroy
   *
   * @param e
   * @param id
   */
  onDelete(e: MouseEvent, id: string) {
    e.preventDefault();

    // add confirm message
    this.delete.emit({ id });
  }
}
