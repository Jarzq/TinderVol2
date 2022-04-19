import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Members } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Members[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.http.get<Members>(this.baseUrl + 'users/' + username);
  }
}
