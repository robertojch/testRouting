import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
  constructor(public router:Router){

  }

  canActive():boolean{
    console.log('hello Guard');
    return true;
  }
  
}
