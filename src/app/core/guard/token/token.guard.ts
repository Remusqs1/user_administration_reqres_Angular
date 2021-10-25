import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  
  constructor(private readonly router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let token = localStorage.getItem('token')
    if (token === null || token === undefined || token === "") {
      this.router.navigateByUrl('/login');
    } else {
      return true;
    }
  }
  
  
}
