import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  
  private mode = 'create';
  private teacherId :string;
  form: FormGroup;
constructor(public route:ActivatedRoute) { }

ngOnInit(): void {
  this.form = new FormGroup({
    name: new FormControl(null,{validators:[Validators.required,Validators.minLength(3)]}),
    url: new FormControl(null,{validators:[Validators.required]}),
    department: new FormControl(null,{validators:[Validators.required]}),
    hiredPos: new FormControl(null,{validators:[Validators.required]}),
    gradYear: new FormControl(null,{validators:[Validators.required]}),
    gradField: new FormControl(null,{validators:[Validators.required]}),
    gradUniv: new FormControl(null,{validators:[Validators.required]}),
    currentUniv: new FormControl(null,{validators:[Validators.required]})

  })

//   this.route.paramMap.subscribe((paramMap:ParamMap) => {
//     if (paramMap.has('teacherId')){
//       this.mode = 'edit';
//       this.teacherId = paramMap.get('teacherId');
//       this.teacherService.getTeacher(this.teacherId).subscribe(teacherData => {
//         this.teacher = {
//         id:teacherData._id,
//         name: teacherData.name,
//         age: teacherData.age,
//         department: teacherData.department,
//         hiredPos: teacherData.hiredPos,
//         gradYear: teacherData.gradYear,
//         gradField: teacherData.gradField,
//         gradUniv: teacherData.gradUniv,
//         currentUniv: teacherData.currentUniv

        
//       } ;
//       this.form.setValue({
//         name: this.teacher.name,
//         age: this.teacher.age,
//         department: this.teacher.department,
//         hiredPos:  this.teacher.hiredPos,
//         gradYear: this.teacher.gradYear,
//         gradField: this.teacher.gradField,
//         gradUniv: this.teacher.gradUniv,
//         currentUniv: this.teacher.currentUniv
//       });
//       });
//     }
//     else {
//       this.mode = 'create';
//       this.teacherId = null;
//     }
//   });
// }
}
onSavePage(){
  
  this.form.reset();
}
}
