import { Injectable } from "@angular/core";
import { Page, Block } from "../interfaces";
import { RequestService } from "../request.service";
import { BlockService } from "../block/block.service";
import { Router } from "@angular/router";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

const REQ_URL: string = "api/pages/";

@Injectable({
  providedIn: "root"
})
export class PageService {
  errors: string[] = [];
  pages: Page[] = [];

  selectedPage: Page;

  selectedBlocks: Block[] = [];
  selectedBlockIds: object = {};

  pageNotFound: boolean = false;

  get blocks() {
    if (!this.blockService.blocks) return [];

    return this.blockService.blocks.filter(
      block => !this.selectedBlockIds[block.id]
    );
  }

  constructor(
    private http: RequestService,
    private blockService: BlockService,
    private router: Router
  ) {}

  /**
   * Get pages
   *
   * @param page
   * @param per_page
   */
  getPages(page: number, per_page: number) {
    return this.http.get(REQ_URL, { per_page, page }).subscribe(res => {
      if (res.success) {
        this.pages = res.data.results;
      }
    });
  }

  /**
   * Reset data
   */
  resetData() {
    this.pageNotFound = false;
    this.selectedBlockIds = {};
    this.selectedBlocks = [];
    this.selectedPage = undefined;
  }

  /**
   * Get all blocks
   */
  getAllBlocks() {
    this.blockService.getBlocks(1, 999999);
  }

  /**
   * Destroy page
   *
   * @param id
   */
  deletePage(id: number) {
    this.http.delete(`api/pages/${id}`).subscribe(res => {
      if (!res.success) return;

      this.pages = this.pages.filter(page => page.id !== id);
    });
  }

  /**
   * Create or Save page
   *
   * @param id
   * @param slug
   * @param title
   * @param blocks
   */
  savePage(id: number = 0, slug: string, title: string, blocks: number[]) {
    if (id) {
      this.http
        .put(`api/pages/${id}`, {
          slug,
          title,
          blocks
        })
        .subscribe(() => {});
      return;
    }

    this.http
      .post("api/pages", {
        slug,
        title,
        blocks
      })
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(["pages", "list"]);
          return;
        }
      });
  }

  /**
   * Get page
   *
   * @param id
   */
  getPage(id: number) {
    this.http.get(`api/pages/${id}`).subscribe(res => {
      if (!res.success) {
        this.pageNotFound = true;
        return;
      }

      this.selectedPage = res.data;
      this.selectedBlocks = res.data.blocks;

      res.data.blocks.map(block => {
        this.selectedBlockIds[block.id] = true;
      });
    });
  }

  /**
   * Add block
   *
   * @param block
   */
  addBlock(block: Block) {
    this.selectedBlocks = [...this.selectedBlocks, block];
    this.selectedBlockIds[block.id] = true;
  }

  /**
   * Remove selected block
   *
   * @param block
   */
  removeSelectedBlock(block: Block) {
    this.selectedBlocks = this.selectedBlocks.filter(
      currBlock => currBlock.id !== block.id
    );
    this.selectedBlockIds[block.id] = undefined;
  }

  /**
   * Reorder blocks
   *
   * @param event
   */
  blocksDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.selectedBlocks,
      event.previousIndex,
      event.currentIndex
    );
  }

  /**
   * Destroy block
   *
   * @param id
   */
  deleteBlock(id: number) {
    this.http.delete(`api/pages/${id}`).subscribe(res => {
      if (!res.success) return;

      this.pages = this.pages.filter(page => page.id !== id);
    });
  }
}
