import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { input } from 'src/app/interfaces/inputField';
// import { InputService } from '../input.service';

@Component({
  selector: 'input-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() defaultValue: false|input = false;
  @Output() change: EventEmitter<any> =  new EventEmitter();
  value: input = {
    // id: 0,
    label: ""
  };


  constructor(/*private inputService:InputService*/) { }

  ngOnInit(): void {
    if(!this.defaultValue) return;
    this.value = {
      ...this.defaultValue
    }
  }
  
  /**
   * Handle changes
   * 
   * @param value 
   */
  onChange(value: input) {
    this.value = { ...value };
    this.change.emit({ value })
  }

}
