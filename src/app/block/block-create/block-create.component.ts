import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-block-create',
  templateUrl: './block-create.component.html',
  styleUrls: ['./block-create.component.css']
})
export class BlockCreateComponent implements OnInit,OnDestroy {

  errors: Errors = {
    title: false
  };

  blockId: number;

  routeChangeSubscription: Subscription
 
  get type(): string {
    return this.blockService.type;
  }

  get loading() {
    return this.blockService.loading;
  }

  get block() {
    return this.blockService.selectedBlock;
  }

  get notFound() {
    return this.blockService.blockNotFound;
  }

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.blockService.resetData();

    /**
     * Get block on route change
     */
    this.routeChangeSubscription = this.route.paramMap.subscribe(params => {
      const blockId: number = +params.get("/blocks/blockId");
      if (!blockId) return;
      this.blockId = blockId;
      this.blockService.getBlock(blockId);
    });
  }

  ngOnDestroy() {
    if(!this.routeChangeSubscription) return;

    // unsubscribe from route change event
    this.routeChangeSubscription.unsubscribe()
  }

  changeType(type: string) {
    this.blockService.changeBlockType(type);
  }

  submitHandler(title: string, data: any) {
    this.errors = { title: false }

    if (!title.trim()) {
      this.errors.title = "Title is required";
    }
    
    if (!data || this.errors.title) return;

    this.blockService.saveBlock(this.blockId, this.type, title, data);
  }
}

interface Errors {
  title: boolean | string;
}
