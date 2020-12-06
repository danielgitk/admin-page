import { Component, OnInit } from '@angular/core';
import { Toast } from '../interfaces';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent  {

  get toasts(): Toast[] {
    return this.toastService.toasts || [];
  }

  constructor(private toastService: ToastService) {}

  /**
   * Get toast classes 
   * 
   * @param toast 
   */
  getToastClasses(toast: Toast) {
    return `toast-${toast.type} toast-status-${toast.status}`;
  }

  /**
   * Remove specific toast
   * @param id 
   */
  removeToast(id: number) {
    this.toastService.removeToast(id);
  }
}
