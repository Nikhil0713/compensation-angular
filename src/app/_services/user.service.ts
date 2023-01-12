import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:8082/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService   {

 
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'viewplan' , { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'compensation', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  create(create: any) {
    console.log(this.tokenStorage.getUser().planId);
    return this.http.post(API_URL + 'createplan',create,  {
      responseType: 'text'
    });
  }
}
