import { Component } from '@angular/core';
import { AppMainComponent } from './app-main.component';
import { AppComponent } from './app.component';

@Component({
  selector: 'gaceg-rightmenu',
  templateUrl: './rightmenu.component.html',
})
export class RightmenuComponent {
  constructor(public appMain: AppMainComponent, public app: AppComponent) {}

}
