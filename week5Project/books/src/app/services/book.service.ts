import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { of } from 'rxjs';
import {
  NgForm,
  Validators,
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BOOKS } from '../data/book-data';
import { Book } from '../book';

@Injectable({
  // below is an options object
  providedIn: 'root',
})
export class BookService {
  // mock api
  // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private base = '/api/books';

  bookForm: FormGroup;
  _id: string = '';
  title: string = '';
  author: string = '';
  pages: number;
  year: number;
  publisher: string = '';
  constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   // this.
  //   this.getBookToEdit(this.route.snapshot.params['id']); // should this be _id?
  //   this.bookForm = this.formBuilder.group({
  //     // everything on lefthand side WAS in single ticks and changed on save. :-/
  //     title: [null, Validators.required],
  //     author: [null, Validators.required],
  //     pages: [null, Validators.required],
  //     year: [null, Validators.required],
  //     publisher: [null, Validators.required],
  //   });
  // }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }
  editBook(book: Book): Observable<Book> {
    this.bookForm.setValue({
      title: this.title,
      author: this.author,
      pages: this.pages,
      year: this.year,
      publisher: this.publisher,
    });
    return this.http.put<Book>(this.base, book); // maybe this should be like delete?
  }

  updateBook(book: Book): Observable<Book> {
    this.bookForm.setValue({
      title: this.title,
      author: this.author,
      pages: this.pages,
      year: this.year,
      publisher: this.publisher,
    });
    return this.http.put<Book>(this.base, book);
  }

  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${book._id}`);
  }
}
