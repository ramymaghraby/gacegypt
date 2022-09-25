import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private menuService: MenuService) {}
  signOut() {
      window.sessionStorage.clear();
      window.localStorage.clear();
      this.menuService.reset();
  }
  public saveToken(token: string) {
      window.localStorage.removeItem(TOKEN_KEY);
      window.localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
      return localStorage.getItem(TOKEN_KEY) as string;
  }
  public saveUser(user: unknown) {
      window.localStorage.removeItem(USER_KEY);
      window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
      return JSON.parse(localStorage.getItem(USER_KEY) as string);
  }
}
