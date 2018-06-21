import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';
import { BOOKS } from '../../data/book-data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Array<Book> = BOOKS;

  selectedBook: Book;

  constructor() {}

  ngOnInit() {}

  onSelect(book: Book) {
    console.log('selecting book: ', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook !== this.book) {
    //   this.selectedBook = book;
    // } else {
    //   this.selectedBook = null;
    // }
  }
  onCreate(book: Book) {
    console.log('creating book: ', book);
    this.books.push(book);
  }
}
