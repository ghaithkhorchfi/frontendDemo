import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss']
})
export class FileTableComponent implements OnInit {
  files:any=[]
  constructor(private fileService:FileService,private router:Router) { }

  ngOnInit(): void {
    this.fileService.getAllFile().subscribe(data=>{
      this.files=data
    })
  }
  goto(id:any){
    this.router.navigate([`editFile/${id}`])


  }
  delete(id:any){
    this.fileService.deleteFile(id).subscribe(data=>{
      this.fileService.getAllFile().subscribe(data=>{
        this.files=data
      })

    })
  }

}
