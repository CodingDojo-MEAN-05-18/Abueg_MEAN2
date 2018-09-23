import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { gitUser } from './git-user';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  name: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    // this.getGit();
  }
  private base: string = 'https://api.github.com/users/';
  getUser(username): Observable<object> {
    return this.http.get<object>(this.base + username);
  }

  errorHandler(error: HttpErrorResponse) {}

  // getGit() {
  //   this.http.get('https://api.github.com/search/').subscribe((name: any[]) => {
  //     this.name.next(name);
  //   });
  // }
}
