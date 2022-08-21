import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraineeshipService {
  traineeshipUrl:string="http://localhost:8090/api/traineeships"
  constructor(private httpClient:HttpClient) { }
  addTraineeship(traineeship:any){
    return this.httpClient.post(this.traineeshipUrl,traineeship)
  }
  getAllTraineeship(){
    return this.httpClient.get(this.traineeshipUrl)
  }
  getById(id:any){
    return this.httpClient.get(`${this.traineeshipUrl}/${id}`)
  }
  updateTraineeship(traineeship:any){
    return this.httpClient.put(`${this.traineeshipUrl}/${traineeship.id}`,traineeship)

  }
  deleteTraineeship(id:any){
    return this.httpClient.delete(`${this.traineeshipUrl}/${id}`)
  }
  abonner(traineeship:any,id:any){
    return this.httpClient.put(`${this.traineeshipUrl}/abon/${id}`,traineeship)
  }


}
