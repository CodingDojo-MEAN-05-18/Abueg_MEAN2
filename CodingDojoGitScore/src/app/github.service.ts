import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { GithubUser } from './github-user';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  private base: string = 'https://api.github.com/users/';

  retrieveGithubUser(username): Observable<object> {
    return this.http.get<object>(this.base + username);
  }
  errorHandler(error: HttpErrorResponse) {}
  // retrieveGithubUser(username: string): Observable<GithubUser> {
  //   return this.http
  //     .get(`https://api.github.com/users/${username}`)
  //     .map(response => response.json());
  // }
}
