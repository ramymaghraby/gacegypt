import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app-main.component';
import { LoginComponent } from './login/login.component';
import { loadRemoteModule } from '@nrwl/angular/mf';


@NgModule({
  imports:[
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppMainComponent,
          children:[
            {
              path: 'it',
              loadChildren: () =>
              loadRemoteModule('it', './Module').then(
                (m) => m.RemoteEntryModule
             ),
                // import('it/Module').then((m) => m.RemoteEntryModule),
            },
            {
              path: 'hrms',
              loadChildren: () =>
              loadRemoteModule('hrms', './Module').then(
                (m) => m.RemoteEntryModule
             ),
                // import('hrms/Module').then((m) => m.RemoteEntryModule),
            },
            {
              path: 'directory',
              loadChildren: () =>
              loadRemoteModule('directory', './Module').then(
                (m) => m.RemoteEntryModule
             ),
                // import('directory/Module').then((m) => m.RemoteEntryModule),
            },
          ],
        },
        {
          path: 'login',
          component: LoginComponent
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ]
})

export class AppRoutingModule {}
