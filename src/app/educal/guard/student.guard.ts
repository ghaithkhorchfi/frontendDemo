import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  user:any={}
  role:any
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let res=localStorage.getItem("user")
      this.user=res?JSON.parse(res):{roles:[
        {id:'',name:'no'}
      ]}
      console.log(this.user);
      this.user.roles.map((e:any)=>{
        this.role=e

      })
      console.log(this.role);
      
      if(this.role.name!='ROLE_STUDENT' || this.role.name!='ROLE_ADMIN'){

        this.router.navigate(['sign-in'])
      }
      return true
  }
  
}
