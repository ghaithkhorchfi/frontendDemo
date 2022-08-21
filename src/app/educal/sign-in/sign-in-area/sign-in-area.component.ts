import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {
loginForm!:FormGroup
user:any={}
  constructor(private formBuilder:FormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })

  }
  login(){
    this.loginService.login(this.user).subscribe(data=>{
      localStorage.setItem('user',JSON.stringify(data))
    })
    console.log(this.user);
    
  }

}
