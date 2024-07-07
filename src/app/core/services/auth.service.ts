import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, mapTo, Observable, tap, of, pipe} from "rxjs";
import {Tokens} from "../models/tokens";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'access';
  private readonly REFRESH_TOKEN = 'refresh';
  private loggedUser: any;
  private registerUrl = "http://127.0.0.1:8005/auth/users/"
  private loginUrl = "http://127.0.0.1:8005/auth/jwt/create/"
  private logoutUrl = "http://0.0.0.0:8005/logout/"
  private refreshTokenUrl = "http://127.0.0.1:8005/auth/jwt/refresh/"
  private forgot_password_url = "http://127.0.0.1:8005/auth/users/reset_password/"
  private changePasswordApi = "http://127.0.0.1:8005/auth/users/reset_password_confirm/"
  private activateUserUrl = "http://127.0.0.1:8005/auth/users/activation/";
  private userRoleUrl = "http://127.0.0.1:8005/auth/user-role/"
  private PatchUserUrl = "http://127.0.0.1:8008/auth/users/me/"

  constructor(private http: HttpClient) {
  }

//  register
  register(data: { first_name: any; last_name: any; email: any; phone: any; password: any; re_password: any }) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.registerUrl, (data), {headers: headers})
  }

  patchUser(data: { first_name: any; last_name: any; phone: any }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `JWT ${this.getToken()}`
      })
    };
    return this.http.patch(this.PatchUserUrl, data, httpOptions);
  }


//  login
  login(data: {email: any, password: any }): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<any>(this.loginUrl, data)
      .pipe(
        tap((tokens: any) => this.doLoginUser(data.email, tokens)),
        mapTo(true),
        catchError(error => {
          // this.toast.error({detail: "Error Message", summary: "Login failed, Try again later!", duration: 5000})
          return of(false)
        })
      )
  }

  logout() {
    return this.http.post<any>(this.logoutUrl, {
      'refresh': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }



  //forgot password
  forgotPassword(data: { email: string }) {
    return this.http.post(this.forgot_password_url, data)
  }

  //change password
  changePassword(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.changePasswordApi, JSON.stringify(data), {headers: headers})
  }

  confirmEmail(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.activateUserUrl, JSON.stringify(data), {headers: headers})
  }

  isAdmin():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `JWT ${this.getToken()}`
      })
    };
    return this.http.get<any>(this.userRoleUrl, httpOptions)
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  refreshToken() {
    return this.http.post<any>(this.refreshTokenUrl, {
      'refresh': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access);
    }));
  }

//  token
  getToken() {
    return localStorage.getItem(this.JWT_TOKEN)
  }

  private doLoginUser(email: any, tokens: Tokens) {
    this.loggedUser = email;
    this.storeTokens(tokens)
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN)
  }

  private storeJwtToken(access: string) {
    localStorage.setItem(this.JWT_TOKEN, access);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


}
