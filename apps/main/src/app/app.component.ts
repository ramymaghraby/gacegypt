import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SpinnerService } from './services/spinner.service';
import { delay, Subscription } from 'rxjs';



@Component({
  selector: 'gaceg-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'main';
  topbarTheme = 'blue';

    menuTheme = 'light';

    layoutMode = 'light';

    menuMode = 'static';

    inlineMenuPosition = 'top';

    inputStyle = 'filled';

    ripple = true;

    isRTL = false;

    spinnerShow = false;

    subscription!: Subscription;


    constructor(
        private primengConfig: PrimeNGConfig,
        private spinner: SpinnerService
        ) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.subscription = this.spinner.spinnerSource.pipe(delay(0)).subscribe(spinner=> {
            console.log(spinner);
            this.spinnerShow = spinner;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
