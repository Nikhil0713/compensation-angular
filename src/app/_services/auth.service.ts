import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8082/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(emailId: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      emailId,
      password
    }, httpOptions);
  }

  register(firstname: string, lastname: string, emailId: string,location:string, jobtitle: string,  department: string, role: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstname,
      lastname,
      emailId,
      location,
      jobtitle,
      department,
      role,
      password
    }, httpOptions);
  }
}
