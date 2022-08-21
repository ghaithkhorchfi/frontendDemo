import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TraineeshipService } from '../service/traineeship.service';

@Component({
  selector: 'app-add-traineeship',
  templateUrl: './add-traineeship.component.html',
  styleUrls: ['./add-traineeship.component.scss']
})
export class AddTraineeshipComponent implements OnInit {
  addTraineeship!:FormGroup
  traineeship:any={}
  id:any
  title:string='Add Traineeship'
  constructor(private formbuilder:FormBuilder,private activatedRoute:ActivatedRoute,private traineeshipService:TraineeshipService,
    private router:Router) { }

  ngOnInit(): void {
    this.addTraineeship=this.formbuilder.group({
      title:[''],
      description:[''],
      state:[''],
      level:[''],
      totalOfhours:[''],
      startDate:[''],
      finalDate:[''],
      startTime:[''],
      meetingHour:[''],
      price:[''],
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.title='Edit Traineeship'
      this.traineeshipService.getById(this.id).subscribe(data=>{
        console.log(data);
        this.traineeship=data
        
      })

    }
  }
  add(){
    if(this.id){
      this.traineeshipService.updateTraineeship(this.traineeship).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/traineeships'])
        
      })

    }
    else{
      console.log(this.traineeship);
      this.traineeshipService.addTraineeship(this.traineeship).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/traineeships'])
        
      })
    }
    
  }

}
