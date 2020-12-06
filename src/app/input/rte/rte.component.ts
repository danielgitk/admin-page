import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-rte',
  templateUrl: './rte.component.html',
  styleUrls: ['./rte.component.css']
})
export class RteComponent implements OnInit {
  @Input() defaultValue: string = ''
  value: string = ''

  constructor() { }

  ngOnInit() {
    this.value = this.defaultValue || ''
  }

  onChange(value: string) {
    this.value = value;
  }
}
