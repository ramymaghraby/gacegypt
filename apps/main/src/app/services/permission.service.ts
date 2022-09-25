import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApplicationPageMenuModel, ApplicationPagePermission, RolesModel } from '../models/app-permission';
import { ApplicationModel, UserApplicationModel } from '../models/token-model';
import { ActiveDirectoryUserModel } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private http: HttpClient) {}
  getApplications() {
      return this.http.get<ApplicationModel[]>(
          environment.authApiUrl + 'Applications'
      );
  }
  getApplicationRoles(appId: number) {
      return this.http.get<RolesModel[]>(
          environment.authApiUrl + 'AppRoles?applicationId=' + appId
      );
  }
  getApplicationPages(appId: number) {
      return this.http.get<ApplicationPageMenuModel>(
          environment.authApiUrl + 'AppPages?applicationId=' + appId
      );
  }
  getApplicationPageMenu(appId: number) {
      return this.http.get<ApplicationPagePermission[]>(
          environment.authApiUrl + 'AppPageMenus?applicationId=' + appId
      );
  }
  getApplicationPermission(employeeHrCode: number) {
      return this.http.get<UserApplicationModel[]>(
          environment.authApiUrl + 'AppPermissions?code=' + employeeHrCode
      );
  }
  getUserApplicationPermission(employeeHrCode: number, appId: number) {
      return this.http.get<ApplicationPagePermission[]>(
          environment.authApiUrl +
              'getuserpermissions?code=' +
              employeeHrCode +
              '&applicationFk=' +
              appId
      );
  }
  getActiveDirectoryActiceUsers() {
      return this.http.get<ActiveDirectoryUserModel[]>(
          environment.authApiUrl + 'activeusers'
      );
  }
}
