import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss']
})
export class AddFileComponent implements OnInit {
addFile!:FormGroup
file:any={}
title:String='Add File'
id:any
user:any={}
  constructor(private formBuilder:FormBuilder,private fileService:FileService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.addFile=this.formBuilder.group({
      name:[''],
      description:[''],
      dateOfCreation:[''],
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.title='Edit File'
      this.fileService.getById(this.id).subscribe(data=>{
        this.file=data
      })
    }
    let res=localStorage.getItem("user")
    this.user=res?JSON.parse(res):{}
    console.log(this.user);
  }
  add(){
    if(this.id){
      this.fileService.updateFile(this.file).subscribe(data=>{
        console.log(data);
        this.router.navigate(['files'])
        
      })
    }
    else{
      let users=[]
      users.push(this.user)
      if(this.user){
        this.file.users=users
        this.fileService.addFile(this.file).subscribe(data=>{
          console.log(data);
          this.router.navigate(['files'])
        })
        
      }
      else{
        this.router.navigate(['sign-in'])

      }
    }    
  }
}
