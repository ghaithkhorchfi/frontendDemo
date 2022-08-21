import { Component, OnInit } from '@angular/core';
import { TraineeshipService } from '../service/traineeship.service';

@Component({
  selector: 'app-traineeships-page',
  templateUrl: './traineeships-page.component.html',
  styleUrls: ['./traineeships-page.component.scss']
})
export class TraineeshipsPageComponent implements OnInit {
  traineeships:any=[]
  user:any={}
  
  constructor(private traineeshipService:TraineeshipService) { }

  ngOnInit(): void {
    this.traineeshipService.getAllTraineeship().subscribe(data=>{
      this.traineeships=data
    })
    let res=localStorage.getItem("user")
    this.user=res?JSON.parse(res):{}
    console.log(this.user);
    
  }
  abonner(course:any){
    console.log(course);
  
   
    this.traineeshipService.abonner( course,this.user.id).subscribe(data=>{
      console.log(data);
      
    })
    
  }

}
