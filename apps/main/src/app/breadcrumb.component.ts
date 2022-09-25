import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
  selector: 'gaceg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [],
})
export class BreadcrumbComponent implements OnDestroy {
  subscription: Subscription;

    items!: MenuItem[];

    home: MenuItem;

    constructor(public breadcrumbService: BreadcrumbService) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(
            (response) => {
                this.items = response;
            }
        );

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
