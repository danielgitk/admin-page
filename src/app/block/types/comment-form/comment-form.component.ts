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
  @Input() defaultValue: false|input = false;
  @Input() data: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> =  new EventEmitter();

  trashIcon = faTrashAlt;
  value: input = {
    // id: 0,
    label: ""
  };

  // ID:number=this.value?.id;

  inputFields : input[] = [
    this.value
  ]

  errors: Errors = {
    inputFieldsError:[]
  }; 

  valid: boolean = true;

  validateData() {
    this.valid = true;
    this.errors = { inputFieldsError:[]};

    this.inputFields.map((inputVal, i) => {
      if (!inputVal.label) {
        // console.log()
        this.errors.inputFieldsError[i] = "Label is required";
        this.valid = false;
      }
    });
    

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
        // id:0,
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
  /* 
  * @param index
  * @param value
  */
  handleChange(index: number, value: input): void {
    let inputFields = [...this.inputFields];
    this.inputFields[index] = value;

    this.inputFields = inputFields;
  }
  /*
  * Handle changes
  * 
  * @param value 
  */
 onChange(value: input) {
   this.value = { ...value };
   this.change.emit({ value })
 }



  constructor() { }

  ngOnInit(): void {
    if (!this.data) return;

    this.inputFields = this.data.inputFields.map((input: any) => input.label);
    if(!this.defaultValue) return;
    this.value = {
      ...this.defaultValue
    }
  }

}

interface Errors {
  inputFieldsError:object;
}
