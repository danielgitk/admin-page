import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  
  private mode = 'create';
  private pageId :string;
  form: FormGroup;
constructor(public route:ActivatedRoute, private pageService: PagesService) { }

ngOnInit(): void {
  this.form = new FormGroup({
    name: new FormControl(null,{validators:[Validators.required,Validators.minLength(3)]}),
    url: new FormControl(null,{validators:[Validators.required]}),
    title:  new FormControl(null,{validators:[Validators.required]}),
    content: new FormControl(null,{validators:[Validators.required]})
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
  console.log(this.form)
  if (this.mode ==='create'){
    this.pageService.addPage(this.form.value.name,
      this.form.value.url,
      this.form.value.title,
      this.form.value.content
     );
  
  }
}
}
