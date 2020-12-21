import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Link } from "src/app/interfaces";

@Component({
  selector: "block-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent {
  @Input() data: any
  @Output() submit: EventEmitter<any> = new EventEmitter();

  errors: Errors = {
    body: false,
    cta: false,
  };

  valid: boolean = true;

  /**
   * Validate data and emit submit event if valid
   * 
   * @param body 
   * @param cta 
   */
  validateData(body: any, cta: Link) {
    this.valid = true;
    this.errors = { body: false, cta: false };

    if (!body) {
      this.errors.body = "body is required";
      this.valid = false;
    }

    if (!cta.url) {
      this.errors.cta = "CTA is required";
      this.valid = false;
    }

    if (!this.valid) {
      this.submit.emit(false)
      return;
    }
    
    this.submit.emit({ body, cta });
  }
}

interface Errors {
  body: boolean | string;
  cta: boolean | string;
}
