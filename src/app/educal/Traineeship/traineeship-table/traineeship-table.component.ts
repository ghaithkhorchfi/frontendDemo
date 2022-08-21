import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeshipService } from '../service/traineeship.service';

@Component({
  selector: 'app-traineeship-table',
  templateUrl: './traineeship-table.component.html',
  styleUrls: ['./traineeship-table.component.scss']
})
export class TraineeshipTableComponent implements OnInit {
traineeships:any=[]
//[
//   {id:1,title:"angular",state:'start',level:'beginer',startDate:'10/10/2022',finalDate:'10/12/2022',price:"500",description:'training',totalOfHours:'40'},
//   {id:1,title:"react",state:'start',level:'beginer',startDate:'10/10/2022',finalDate:'10/12/2022',price:"500",description:'training',totalOfHours:'40'},
//   {id:1,title:"devops",state:'start',level:'beginer',startDate:'10/10/2022',finalDate:'10/12/2022',price:"500",description:'training',totalOfHours:'40'},
// ]
  constructor(private router:Router,private traineeshipService:TraineeshipService) { }

  ngOnInit(): void {
    this.traineeshipService.getAllTraineeship().subscribe(data=>{
      console.log(data);
      this.traineeships=data
      
    })
  }
  goto(id:any){
    this.router.navigate([`editTraineeship/${id}`])

  }
  delete(id:any){
    this.traineeshipService.deleteTraineeship(id).subscribe(data=>{
      this.traineeshipService.getAllTraineeship().subscribe(data=>{
        console.log(data);
        this.traineeships=data
        
      })

    })

  }

}
