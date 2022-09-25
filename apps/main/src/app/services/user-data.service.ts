import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApplicationPagePermission } from '../models/app-permission';
import { ApplicationModel } from '../models/token-model';
import { UserDataModel } from '../models/user-data';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataSource = new BehaviorSubject(new UserDataModel());
  currentUserData = this.userDataSource.asObservable();
  private applicationsDataSource = new BehaviorSubject(
      new ApplicationModel()
  );
  applicationsData = this.applicationsDataSource.asObservable();

  constructor(private http: HttpClient, private spinner: SpinnerService) {}

  storeUserDataInStorage(userData: UserDataModel) {
      this.spinner.show();
      userData.isLoggedIn = true;
      window.localStorage.setItem('User-Data', JSON.stringify(userData));
      this.userDataSource.next(userData);
      this.spinner.hide();
  }
  removeUserDataFromStorage() {
      this.userDataSource.next(new UserDataModel());
      window.localStorage.removeItem('User-Data');
  }
  getAppPageMenus(appId: number) {
      return this.http.get<ApplicationPagePermission[]>(environment.authApiUrl + 'AppPageMenus?applicationId=' + appId);
  }
  // getApplications() {
  //     this.http.get<ApplicationModel[]>(
  //         environment.authApiUrl + 'Applications'
  //     ).subscribe;
  // }
}
