import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoggerService } from '../services/app/logger.service';
import { CredentialsService } from '../services/app/credentials.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private logger: LoggerService, private router: Router, private credentialsService: CredentialsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.credentialsService.isAuthenticated()) {
      return true;
    }
    return false;
  }
}
