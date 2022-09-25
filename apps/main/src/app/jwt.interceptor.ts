import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';
import { SpinnerService } from './services/spinner.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private token: TokenStorageService,
    private spinner: SpinnerService
    ) {}

intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
): Observable<HttpEvent<unknown>> {
    console.log(request.url);

    const token = this.token.getToken();
    if (token != null) {
        request = request.clone({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            setHeaders: { Authorization: `Bearer ${token}` },
        });
        this.spinner.show();
    }

    return next.handle(request).pipe(finalize(()=> this.spinner.hide()));
}
}
