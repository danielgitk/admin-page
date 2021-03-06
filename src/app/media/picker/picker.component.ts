import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Media } from 'src/app/interfaces';
import { MediaService } from '../media.service';

@Component({
  selector: 'media-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

  @Input() defaultValue: false|Media = false;
  @Output() change: EventEmitter<any> =  new EventEmitter();
  value: Media = {
    id: 0,
    status: "",
    path: "",
    title: "",
    alt: "",
    created_at: "",
    updated_at: ""
  };

  showOverlay: boolean = false;

  constructor(private mediaService: MediaService) {}

  get image() {
    const url = this.mediaService.getMediaImageUrl(this.value.path, "130x130");
    return `url(${url})`;
  }

  ngOnInit() {
    if(!this.defaultValue) return;
    this.value = {
      ...this.defaultValue,
      status: 'ready'
    }
  }

  toggleOverlay(showOverlay: boolean) {
    this.showOverlay = showOverlay;
  }

  /**
   * Handle changes
   * 
   * @param value 
   */
  onChange(value: Media) {
    this.toggleOverlay(false);
    this.value = { ...value };
    this.change.emit({ value })
  }
}
