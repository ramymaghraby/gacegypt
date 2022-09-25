import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ContactComponent } from '../contact/contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'contact-detail',
        component:ContactDetailComponent
      }
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
