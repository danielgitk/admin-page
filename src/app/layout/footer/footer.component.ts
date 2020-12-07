import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../layout.service'
@Component({
  selector: 'panel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FootersComponent implements OnInit {

  get text() {
    return this.layoutService.footer.text;
  }

  constructor(private layoutService: LayoutService) { }
  
  ngOnInit() {
    this.layoutService.getFooter();
  }

  /**
   * Save footer changes
   * 
   * @param e 
   * @param text 
   */
  save(e: Event, text: string) {
    e.preventDefault();
    
    this.layoutService.saveFooter(text);
  }
}
