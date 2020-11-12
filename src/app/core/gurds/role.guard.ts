import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoggerService } from '../services/app/logger.service';
import { CredentialsService } from '../services/app/credentials.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private logger: LoggerService, private credentialsService: CredentialsService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (
      this.credentialsService.credentials &&
      (!next.data.roles || next.data.roles.indexOf(this.credentialsService.credentials.role) !== -1)
    ) {
      return true;
    }
    return false;
  }
}
