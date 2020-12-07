import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Media } from 'src/app/interfaces';
import { MediaService } from '../media.service';

@Component({
  selector: 'media-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() selectedMedia: Media;

  @Output() mediaItemClick: EventEmitter<Media> = new EventEmitter();

  get mediaList() {
    return this.mediaService.mediaList;
  }

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.mediaService.getAllMedia(1);
  }

  /**
   * Upload photo
   *
   * @param e
   */
  uploadPhotos(e: Event) {
    const files = (<HTMLInputElement>e.target).files;

    const filesLength = files.length;

    for (let i = 0; i < filesLength; i++) {
      const formData = new FormData();
      formData.append("image", files[i]);
      this.mediaService.uploadMedia(formData);
    }
  }

  trackByMedia(i: number, media: Media) {
    return media.id;
  }

  selectMedia(media: Media) {
    this.mediaItemClick.emit(media);
  }
}
