import { LoggerService } from './../services/app/logger.service';
import { CredentialsService } from '../services/app/credentials.service';
import { UserRole } from '../models/user-role.enum';
import { AuthenticationService } from '../services/app/authentication.service';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';

@Injectable()
export class RedirectByRoleGuard implements CanActivate {
  constructor(
    private credentialsService: CredentialsService,
    private router: Router,
    private logger: LoggerService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (this.credentialsService.credentials) {
      this.logger.debug('Redirecting to Role based URL...');
      switch (this.credentialsService.credentials.role) {
        case UserRole.ADMIN:
          this.router.navigateByUrl('/admin');
          break;
        case UserRole.COMPANY:
          this.router.navigateByUrl('/agent');
          break;
        case UserRole.DRIVER:
          this.router.navigateByUrl('/driver');
          break;
        case UserRole.USER:
          this.router.navigateByUrl('/user');
          break;
        default:
          this.router.navigateByUrl('/404');
      }
      return false;
    }
  }
}
