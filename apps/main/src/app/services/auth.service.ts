import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserDataModel } from '../models/user-data';
import { UserPermission } from '../models/app-permission';
import { LoginUserModel, TokenModel } from '../models/token-model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: LoginUserModel) {
      return this.http.post<TokenModel>(
          environment.authApiUrl + 'login',
          user
      );
  }
  getUserData() {
      return this.http.get<UserDataModel>(environment.authApiUrl + 'user');
  }
  getUserPermission(userPermission: UserPermission) {
      return this.http.get(
          environment.authApiUrl +
              'getuserpermissions?code=' +
              userPermission.code +
              '&applicationFk=' +
              userPermission.applicationFk
      );
  }
}
