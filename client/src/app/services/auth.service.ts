import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APIURL = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.APIURL}/auth/signup`, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.APIURL}/auth/login`, userData, { withCredentials: true });
  }

  

  // logout(): Observable<any> {
  //   return this.http.post(`${this.APIURL}/logout`, {});
  // }
}
