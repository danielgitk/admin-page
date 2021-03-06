import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageService } from "../page.service";
import { Block } from "src/app/interfaces";
import { faHamburger, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { BlockService } from 'src/app/block/block.service';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})
export class PageCreateComponent implements OnInit,OnDestroy {
  dragHandlerIcon = faHamburger;
  removeBlockIcon = faTrashAlt;
  pageId: number = 0;
  blockType: string;
  dodo = false;
  errors: Errors = {
    slug: false,
    title: false,
    blocks: false
  };

  valid: boolean = true;
  routeChangeSubscription: Subscription;

  get defaultSlug() {
    if (!this.pageService.selectedPage) return "";

    return this.pageService.selectedPage.slug;
  }


  get defaultTitle() {
    if (!this.pageService.selectedPage) return "";

    return this.pageService.selectedPage.title;
  }

  get selectedBlocks() {
    return this.pageService.selectedBlocks;
  }

  get blocks() {
    return this.pageService.blocks;
  }

  get notFound() {
    return this.pageService.pageNotFound;
  }

  constructor(
    private pageService: PageService,
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pageService.resetData();
    this.pageService.getAllBlocks();

    this.routeChangeSubscription = this.route.paramMap.subscribe(params => {
      const pageId: number = +params.get("pageId");
      if (!pageId) return;
      this.pageId = pageId;
      this.pageService.getPage(pageId);
    });
  }

  ngOnDestroy() {
    if (!this.routeChangeSubscription) return;

    this.routeChangeSubscription.unsubscribe();
  }

  /**
   * Get block title
   *
   * @param title
   */
  getBlockTitle(title: string): string {
    let result = title.substring(0, 22).trim();
    if (title.length > 22) result += "...";

    return result;
  }

  /**
   * Add block
   *
   * @param block
   */
  addBlock(block: Block) {
    this.pageService.addBlock(block);
  }

  helloWorld(){
    if (this.dodo){ 
      this.dodo = false;
      this.pageService.getAllBlocks();
    }
    else{
      this.dodo = true;
    }

  }
  changeType(type: string) {
    this.blockType = type;
  console.log("clicked "+ type);  }

  /**
   * Remove selected block
   *
   * @param block
   */
  removeSelectedBlock(block: Block) {
    this.pageService.removeSelectedBlock(block);
  }

  /**
   * Reorder selected blocks
   *
   * @param event
   */
  blocksDrop(event: CdkDragDrop<string[]>) {
    this.pageService.blocksDrop(event);
  }

  /**
   * Handle submit
   *
   * @param e
   * @param slug
   * @param title
   */
  submitHandler(e: Event, slug: string, title: string): void {
    e.preventDefault();
    this.valid = true;
    let valid = true;
    let errors: Errors = {
      blocks: false,
      title: false,
      slug: false
    };
    // validate data
    if (!slug.trim()) {
      valid = false;
      errors.slug = "Slug is required";
    }

    if (!title) {
      valid = false;
      errors.title = "Title is required";
    }


    if (slug && slug !== '/' && !slugRegex.test(slug)) {
      valid = false;
      errors.slug = "Slug format is invalid";
    }

    if (!this.selectedBlocks.length) {
      valid = false;
      errors.blocks = "Please select at least one block.";
    }
    this.errors = errors;
    this.valid = valid;
    if (!valid) return;

    this.pageService.savePage(
      this.pageId,
      slug,
      title,
      this.selectedBlocks.map(block => block.id)
    );
  }
}

const slugRegex = new RegExp("\/[\/a-z-0-9]+$");

interface Errors {
  blocks: false | string;
  title: false | string;
  slug: false | string;
}
