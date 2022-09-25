import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppComponent } from './app.component';
import { ApplicationPagePermission } from './models/app-permission';
import { MenuService } from './services/menu.service';
import { PermissionService } from './services/permission.service';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'gaceg-menu',
  template: `
        <ul class="layout-menu">
            <li
                app-menuitem
                *ngFor="let item of model; let i = index"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
        </ul>
    `,
})
export class MenuComponent implements OnInit, OnDestroy {
  model: ApplicationPagePermission[] = [];
    subscription!: Subscription;

    constructor(
        public app: AppComponent,
        private userDataService: UserDataService,
        private userPermissionService: PermissionService,
        private menuService: MenuService

        ) {}

    ngOnInit() {
        this.subscription = this.menuService.currentmenuItems.subscribe(menuItem => this.model = menuItem);
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    getAppPermittedPages(appId: number){
        console.log(appId);
        // this.userPermissionService.getApplicationPageMenu(appId).subscribe(appPages => this.menuService.showAppMenus(appPages));
        this.userPermissionService.getUserApplicationPermission(1529,1).subscribe(appPages => this.menuService.showAppMenus(appPages));
    };
}
