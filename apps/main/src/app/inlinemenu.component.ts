/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';
import { Subscription } from 'rxjs';

import { AppMainComponent } from './app-main.component';
import { AppComponent } from './app.component';
import { TokenStorageService } from './services/token-storage.service';
import { AuthService } from './services/auth.service';
import { UserDataService } from './services/user-data.service';
import { UserDataModel } from './models/user-data';
import { DirectoryService } from './services/directory.service';

@Component({
  selector: 'gaceg-inlinemenu',
  templateUrl: './inlinemenu.component.html',
  animations: [
    trigger('menu', [
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          paddingBottom: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
          overflow: 'visible',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          'z-index': 100,
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          'z-index': '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition('visible => hidden', animate('.1s linear')),
      transition('hidden => visible', [
        style({ transform: 'scaleY(0.8)' }),
        animate('.12s cubic-bezier(0, 0, 0.2, 1)'),
      ]),
    ]),
  ],
})
export class InlinemenuComponent implements OnInit, OnDestroy {
  @Input() key = 'inline-menu';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() style: any;

  @Input() styleClass!: string;

  active!: boolean;

  userData!: UserDataModel;
  subscription!: Subscription;

  constructor(
    public appMain: AppMainComponent,
    public app: AppComponent,
    private tokenService: TokenStorageService,
    private authService: AuthService,
    private userDataService: UserDataService,
    private directoryService: DirectoryService
  ) {}

  ngOnInit(): void {
    this.userData = new UserDataModel();
    this.userData.isLoggedIn = false;
    this.subscription = this.userDataService.currentUserData.subscribe(
      (user) => (this.userData = user)
    );
    this.getUserDataFromToken();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClick(event: { preventDefault: () => void }) {
    this.appMain.onInlineMenuClick(event, this.key);
    event.preventDefault();
  }

  get isTooltipDisabled() {
    return !(this.appMain.isSlim() && !this.appMain.isMobile());
  }

  get tabIndex() {
    return !this.appMain.inlineMenuActive ? '-1' : null;
  }

  isHorizontalActive() {
    return this.appMain.isHorizontal() && !this.appMain.isMobile();
  }

  getUserDataFromToken() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.authService.getUserData().subscribe((data: any) => {
      console.log(data);
      const userApplications = data.Applications;
      this.directoryService
        .getContactData(data.hrCode)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .subscribe((directoryData: any) => {
          console.log(directoryData);
          this.userData = directoryData[0];
          this.userData.photo =
            'data:image/jpg;base64,' + directoryData[0].photo;
          this.userData.Applications = userApplications;
          this.userData.isLoggedIn = true;
          this.userDataService.storeUserDataInStorage(this.userData);
        });
    });
  }
  onLogout() {
    this.userDataService.removeUserDataFromStorage();
    this.userData.isLoggedIn = false;
    this.tokenService.signOut();
  }
}
