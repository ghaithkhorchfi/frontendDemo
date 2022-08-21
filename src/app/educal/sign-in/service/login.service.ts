import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url:string='http://localhost:8090/api/users/login'
  constructor(private httpClient:HttpClient) { }
  login(user:any){
    return this.httpClient.post(this.url,user)

  }
}
