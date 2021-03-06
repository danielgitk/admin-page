import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // how many pages to get from the back-end server
  pagesPerPage: number = 10;
  
  // current page (pagination)
  currentPage: number = 1;

  get pages() {
    return this.pageService.pages;
  }

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.loadPages();
  }

  /**
   * Get pages
   */
  loadPages() {
    this.pageService.getPages(this.currentPage, this.pagesPerPage);
  }

  /**
   * Destroy page
   *  
   */
  deletePage({ id }) {
    this.pageService.deletePage(id);
  }
}

