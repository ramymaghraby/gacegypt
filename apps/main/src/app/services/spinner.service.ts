import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public spinnerSource = new BehaviorSubject(false);

// eslint-disable-next-line @typescript-eslint/no-empty-function
constructor() { }

show(){
  this.spinnerSource.next(true);
}

hide() {
  this.spinnerSource.next(false);
}
}
