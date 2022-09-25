import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {

  AnimationEvent,
} from '@angular/animations';
import { Subscription } from 'rxjs'
import { MegaMenuItem } from 'primeng/api'

import { AppMainComponent } from './app-main.component';
import { AppComponent } from './app.component';
import { MenuService } from './services/menu.service';
import { TokenStorageService } from './services/token-storage.service';
import { UserDataService } from './services/user-data.service';
import { PermissionService } from './services/permission.service';
import { UserDataModel } from './models/user-data';
import { DecodedTokenModel } from './models/token-model';


@Component({
  selector: 'gaceg-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit, OnDestroy {
  constructor(
    public appMain: AppMainComponent,
    public app: AppComponent,
    private tokenService: TokenStorageService,
    private userDataService: UserDataService,
    private userPermissionService: PermissionService,
    private menuService: MenuService
) {}

activeItem!: number

model: MegaMenuItem[] =[];

userData!: UserDataModel;
subscription!: Subscription;
appsSubscription!: Subscription;

@ViewChild('searchInput') searchInputViewChild!: ElementRef;

onSearchAnimationEnd(event: AnimationEvent) {
    switch (event.toState) {
        case 'visible':
            this.searchInputViewChild.nativeElement.focus();
            break;
    }
}
ngOnInit(): void {
    this.getUserApplications();
    this.subscription = this.userDataService.currentUserData.subscribe(
        (user) => {
            this.userData = user;
        }
    );
    this.appsSubscription = this.menuService.currentAppsItems.subscribe(apps => this.model = apps);
}
ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.appsSubscription.unsubscribe();
}
onLogout() {
    this.userData.isLoggedIn = false;
    this.tokenService.signOut();
}
getUserApplications() {
    const user: DecodedTokenModel = this.tokenService.getUser();
    if (user!= null) {
        for (const userApp of user.ApplicationsArray) {
            this.model
            .push({
                label: userApp.Name,
                icon: 'pi ' + userApp.Icon,
                command: () => this.getUserAppMenu(userApp.Id)
            });
        }
        this.menuService.storeApps(this.model);
    }

    }
    getUserAppMenu(id: number) {
        this.userPermissionService
        .getApplicationPageMenu(id)
        .subscribe(menus => {
            this.menuService.showAppMenus(menus);
        });
    }
}
