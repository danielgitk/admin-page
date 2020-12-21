
import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: 'block-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent{
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
      this.errors.body = "Text is required";
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
}

interface Errors {
  body: boolean | string;
  color: boolean | string;
}
