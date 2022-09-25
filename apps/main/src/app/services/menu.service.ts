/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MegaMenuItem } from 'primeng/api';
import { ApplicationPagePermission } from '../models/app-permission';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuSource = new Subject<string>();
  private resetSource = new Subject();
  private menuItemsSource = new Subject<ApplicationPagePermission[]>();
  private appsItemsSource = new Subject<MegaMenuItem[]>();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();
  currentmenuItems = this.menuItemsSource.asObservable();
  currentAppsItems = this.appsItemsSource.asObservable();

  onMenuStateChange(key: string) {
      this.menuSource.next(key);
  }

  reset() {
      this.resetSource.next(true);
      // eslint-disable-next-line prefer-const
      const menu: ApplicationPagePermission[] = [];
      // eslint-disable-next-line prefer-const
      const apps: MegaMenuItem[] = [];
      this.menuItemsSource.next(menu);
      this.appsItemsSource.next(apps);
  }
  showAppMenus(menuItems: ApplicationPagePermission[]){
      // eslint-disable-next-line prefer-const, @typescript-eslint/no-unused-vars
      let menu: ApplicationPagePermission[] =[];
      // this.menuItemsSource.next(menu);
      this.menuItemsSource.next(menuItems);
  }
  storeApps(menu: MegaMenuItem[]){
      this.appsItemsSource.next(menu);
  }
}
