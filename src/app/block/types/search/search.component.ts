import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'block-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() data: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  defaultplace_holder: string = "search...";

  errors: Errors = {
    place_holder: false
  };

  valid: boolean = true;

  /**
   * Validate data and emit submit event
   *
   * @param place_holder
   */
  validateData(place_holder: string) {
    this.valid = true;
    this.errors = { place_holder: false };

    if (!place_holder) {
      this.errors.place_holder = "Place holder is required";
      this.valid = false;
    }

    if (!this.valid) {
      this.submit.emit(false);
      return;
    }

    this.submit.emit({place_holder });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface Errors {
  place_holder: boolean | string;
}
