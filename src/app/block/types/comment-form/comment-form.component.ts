import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { input } from 'src/app/interfaces/inputField';

@Component({
  selector: 'block-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() data: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  trashIcon = faTrashAlt;

  inputFields : input[] = [
    {
      label:""
    }
  ]

  errors: Errors = {
    inputFields:[]
  }; 

  valid: boolean = true;

  /**
   * Validate data and emit submit event
   
   */
  validateData() {
    this.valid = true;
    this.errors = { inputFields:[]};

    // this.inputFields.map((input, i) => {
    //   if (!input.label) {
    //     this.errors.inputFields[i] = "Label is required";
    //     this.valid = false;
    //   }
    // });

    if (!this.valid) {
      this.submit.emit(false);
      return;
    }

    this.submit.emit({ 
      inputFields: this.inputFields.map(field => ({ input: field }))

     });
  }
  addField(){
    this.inputFields = [
      ...this.inputFields,{
        label:""
      }
    ]
  }
  inputDrop(e: CdkDragDrop<string[]>) {
    moveItemInArray(this.inputFields, e.previousIndex, e.currentIndex);
  }
  removeField(e: MouseEvent, index: number) {
    e.preventDefault();
    let inputFields = [...this.inputFields];
    inputFields.splice(index, 1);
    this.inputFields = inputFields;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

interface Errors {
  inputFields:string[];
}
