import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Media } from 'src/app/interfaces';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() data: Media
  @Input() isActive: boolean
  @Output() mediaClick: EventEmitter<Media> = new EventEmitter()

  constructor(private mediaService: MediaService) { }


  /**
   * Media click handler
   */
  onClick() {
    this.mediaClick.emit(this.data);  
  }

  /**
   * Get media path
   * 
   * @param path 
   */
  getMediaPath(path: string): string {
    const url = this.mediaService.getMediaImageUrl(path, '130x130')
    return `url(${url})`;
  }
}

