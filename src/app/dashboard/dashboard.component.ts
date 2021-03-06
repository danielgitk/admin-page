import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block/block.service';
import { PageService } from '../page/page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  get blocksCount() {
    return this.blockService.blocks.length || '-';
  }

  get pagesCount() {
    return this.pageService.pages.length || '-';
  }
  constructor(private pageService: PageService, private blockService: BlockService) {}

  ngOnInit() {
    this.pageService.getPages(1, 99999);
    this.blockService.getBlocks(1, 99999);
  }
}

