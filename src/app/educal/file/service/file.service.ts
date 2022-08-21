import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileUrl:string="http://localhost:8090/api/files"
  constructor(private httpClient:HttpClient) { }
  addFile(file:any){
    return this.httpClient.post(this.fileUrl,file)
  }
  getAllFile(){
    return this.httpClient.get(this.fileUrl)
  }
  getById(id:any){
    return this.httpClient.get(`${this.fileUrl}/${id}`)
  }
  updateFile(file:any){
    return this.httpClient.put(`${this.fileUrl}/${file.id}`,file)

  }
  deleteFile(id:any){
    return this.httpClient.delete(`${this.fileUrl}/${id}`)
  }
}
