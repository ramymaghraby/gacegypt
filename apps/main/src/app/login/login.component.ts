import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { DecodedTokenModel, LoginUserModel, TokenModel } from '../models/token-model';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../services/spinner.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'gaceg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: LoginUserModel = new LoginUserModel();

isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];

constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private spinner: SpinnerService
) {}

ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
    }
}

login() {
    this.spinner.show();
    this.authService.login(this.user).subscribe((data: TokenModel) => {
        const decodedToken: DecodedTokenModel = jwt_decode(data.token);
        console.log(decodedToken);
        decodedToken.ApplicationsArray = JSON.parse(
            decodedToken.Applications
        );
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(decodedToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().ApplicationsArray;
        this.router.navigate(['/']);
    });
}

reloadPage() {
    window.location.reload();
}
}
