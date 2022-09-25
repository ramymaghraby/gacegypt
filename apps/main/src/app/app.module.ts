import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RippleModule} from 'primeng/ripple';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppMainComponent } from './app-main.component';
import { TopbarComponent } from './topbar.component';
import { RightmenuComponent } from './rightmenu.component';
import { InlinemenuComponent } from './inlinemenu.component';
import { MenuComponent } from './menu.component';
import { MenuitemComponent } from './menuitem.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { FooterComponent } from './footer.component';
import { ConfigComponent } from './config.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    AppMainComponent,
    TopbarComponent,
    RightmenuComponent,
    InlinemenuComponent,
    MenuComponent,
    MenuitemComponent,
    BreadcrumbComponent,
    FooterComponent,
    ConfigComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
		CheckboxModule,
    RippleModule,
    ProgressSpinnerModule,
    MegaMenuModule,
    MenubarModule,
    MenuModule,
    SidebarModule,
    BreadcrumbModule,
    ButtonModule,
    RadioButtonModule,


  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
