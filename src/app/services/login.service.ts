import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  apiUrl: string = "http://localhost:4200/api/Auth";

  login(loginForm: any) {
    return this._http.post(this.apiUrl + "/Login", loginForm);
  }
}

