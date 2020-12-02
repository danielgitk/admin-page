import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { PagesService } from '../pages.service';
import { Page } from '../page.model';

@Component({
  selector: 'app-view-pages',
  templateUrl: './view-pages.component.html',
  styleUrls: ['./view-pages.component.css']
})
export class ViewPagesComponent implements OnInit {
  pages : Page[]=[];
  @ViewChild(MatSort) sort: MatSort;
  constructor(  public router:Router) { }
  public displayedColumns = ['name','title', 'url',  'edit',
'delete'
];

public dataSource = new MatTableDataSource<Page>();

  ngOnInit(): void {
    this.getAllTeachers();
  }
  
  public getAllTeachers = () => {
    // this.repoService.getData('api/Teacher')
    // .subscribe(res => {
     
    this.pages = 
     [{id: "dqwe",
      name: "fdaafa",
      url: "/hello",
      title:"dafda",
      content: "jello"      
      },
      {id: "df3343a",
      name: "adfa",
      url: "/hello",
      title:"dafda",
      content: "jello" 
      
      }];
    
    
      this.dataSource.data = this.pages;
    // })
    }
    
    
    public redirectToDetails = (id: string) => {
    console.log("details clicked");
    this.router.navigate(['/details'])
    
    }
    public redirectToUpdate = (id: string) => {
      console.log(id);
      this.router.navigate(['/login']);
      
    }
    // public redirectToDelete = (teacherId: string) => {
    //       console.log("delete clicked");
      
    //     this.teacherService.deleteTeacher(teacherId).subscribe(() => {
    //       this.teacherService.getTeachers();
    //     })

}
