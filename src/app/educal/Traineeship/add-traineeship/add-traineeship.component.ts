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
  imagePreview:string=''
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
      img:[''],
      fileimg:[File]
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
      this.traineeship=this.addTraineeship.value
      console.log(this.addTraineeship.value);
      this.traineeshipService.addTraineeship(this.addTraineeship.value).subscribe(data=>{
        console.log(data);
        //this.router.navigate(['/traineeships'])
        
      })
      console.log(this.traineeship.fileimg);
      const file= new FormData()
      file.append('file',this.traineeship.fileimg)
      
      this.traineeshipService.upload(file).subscribe()
    }
    console.log(this.addTraineeship);
    
    
  }
  onImageSelected(event:Event){
    const file =(event.target as HTMLInputElement)?.files?.[0];
    const form=new FormData()
    form.append('file',file as Blob)
    let date= new Date()
    this.addTraineeship.patchValue({ img: 'D:\\uploadFile\\'+file?.name+''+date.getDate().toString()+'_'+date.getHours().toString() });
    this.addTraineeship.updateValueAndValidity();
    this.addTraineeship.patchValue({ fileimg:file });
    this.addTraineeship.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    let val=file as Blob
    reader.readAsDataURL(val);

  }

}
