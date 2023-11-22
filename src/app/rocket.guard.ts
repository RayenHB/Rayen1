import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RocketGuard implements CanActivate {
  constructor (private authService: AuthService,
  private router : Router) {}
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (this.authService.isAdmin())
  return true;
  else
  {
  this.router.navigate(['app-forbidden']);
  return false;
  }
  }
}
