import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';
import { JsonPipe } from '@angular/common';



@Injectable ({providedIn: 'root'})
export class PagesService{
    
   

    constructor ( private router: Router){}

    // getPages(){
    //     this.http.get<{message: string; pages: any}>('http://localhost:3000/api/pages')
    //     .pipe(
    //         map((returnData) =>{
    //         return returnData.pages.map(page => {
    //             return {
    //                 id: page._id,  
    //                 name: page.name,
    //                 url: page.url,
    //                 title: page.title,
    //                 content: page.content
    //              
    //             };
    //         });
    //     }))
    //     .subscribe(localtrs => {
    //         this.pages = localtrs;
    //         this.pageUpdated.next([...this.pages]);
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
}