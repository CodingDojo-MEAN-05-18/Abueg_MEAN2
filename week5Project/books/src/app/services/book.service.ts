import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { BOOKS } from '../data/book-data';
import { Book } from '../book';

@Injectable({
  // below is an options object
  providedIn: 'root',
})
export class BookService {
  // mock api
  private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);

    // turns into a stream of books array
    // return of(BOOKS);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${book.id}`);
  }
}
