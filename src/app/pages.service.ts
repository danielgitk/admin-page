import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';
import { JsonPipe } from '@angular/common';



@Injectable ({providedIn: 'root'})
export class PagesService{
    
   

    constructor ( private router: Router){}

    // getTeachers(){
    //     this.http.get<{message: string; teachers: any}>('http://localhost:3000/api/teachers')
    //     .pipe(
    //         map((returnData) =>{
    //         return returnData.teachers.map(teacher => {
    //             return {
    //                 id: teacher._id,  
    //                 name: teacher.name,
    //                 age: teacher.university,
    //                 department: teacher.department,
    //                 hiredPos: teacher.hiredPos,
    //                 gradField:teacher.gradField,
    //                 gradUniv: teacher.gradUniv,
    //                 currentUniv:teacher.currentUniv
    //             };
    //         });
    //     }))
    //     .subscribe(localtrs => {
    //         this.teachers = localtrs;
    //         this.teacherUpdated.next([...this.teachers]);
    //     });

    // }

   


    addPage(name: string,url: string,title: string,content: string){
        const pageData = new FormData();
        pageData.append("name",name);
        pageData.append("url",url);
        pageData.append("title",title);
        pageData.append("content",content);
       
        console.log(pageData);

        // this.http.post<{message: string}>("http://localhost:3000/api/page",pageData)
        // .subscribe((responseData) => {
        //     console.log(responseData.message)
        //     this.router.navigate(["/"]);
        // })

    }
    // getTeacher(teacherId:string){
    //     return this.http.get<{_id:string,name: string,age: number,department: string,hiredPos: string,gradYear: string,gradField: string,gradUniv: string,currentUniv: string}>("http://localhost:3000/"+teacherId);

    // }
    // deleteTeacher(teacherId: string){
    //     return this.http.delete("http://localhost:3000"+teacherId);
    // }

    // updateTeacher(teacherId:string,name: string,age: number,department: string,hiredPos: string,gradYear: string,gradField: string,gradUniv: string,currentUniv: string){

    // }
}