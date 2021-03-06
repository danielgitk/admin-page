import { Component } from "@angular/core";
import { Media } from "../../interfaces";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.css"]
})
export class MediaComponent {
  selectedMedia: Media = {
    id: -2,
    alt: "",
    title: "",
    status: "loading",
    path: "loading",
    created_at: "loading",
    updated_at: "loading"
  };

  selectMedia(media: Media) {
    this.selectedMedia = { ...media };
  }
}