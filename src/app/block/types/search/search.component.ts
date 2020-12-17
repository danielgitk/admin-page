import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'block-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() data: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  defaultColor: string = "#fff";

  errors: Errors = {
    body: false,
    color: false
  };

  valid: boolean = true;

  /**
   * Validate data and emit submit event
   *
   * @param body
   * @param color
   */
  validateData(body: string, color: string) {
    this.valid = true;
    this.errors = { body: false, color: false };

    if (!body) {
      this.errors.body = "Image is required";
      this.valid = false;
    }
    if (!color) {
      this.errors.color = "Color is required";
      this.valid = false;
    }

    if (!this.valid) {
      this.submit.emit(false);
      return;
    }

    this.submit.emit({ body, color });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface Errors {
  body: boolean | string;
  color: boolean | string;
}
