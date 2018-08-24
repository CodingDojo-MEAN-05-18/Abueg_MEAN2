import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../book';
import { Review } from '../../review';
import { Router, ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { BookService } from '../../services';
import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css'],
  providers: [TitleizePipe],
})
export class BookReviewComponent implements OnInit {
  books: Array<Book> = [];
  review: Array<Review> = [];
  sub: Subscription;
  selectedBook: Book;
  filter: Book = new Book();
  @Input() book: Book;
  errorMessage: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.book = this.route.snapshot.data.book as Book;
    this.sub = this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.books.forEach(book => {
        // book.author = this.titleize.transform(book.author);
      });
    });
  }
  onSubmit(book: Book) {
    this.bookService.updateBook(book).subscribe(
      updatedBook => {
        console.log('updating book', updatedBook);
        this.books.push(updatedBook);
      },
      error => {
        console.log(error);
      }
    );
  }
}
