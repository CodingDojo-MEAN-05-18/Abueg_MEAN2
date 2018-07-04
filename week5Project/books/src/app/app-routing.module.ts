import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromBooks from './books';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookResolve } from './resolvers/index';
const routes: Routes = [
  {
    path: '',
    // component: fromBooks.BookListComponent,
    redirectTo: 'books',
    pathMatch: 'full',
  },
  // {
  //   path: 'books',
  //   redirectTo: 'books/list',
  // },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent,
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent,
      },
      {
        path: ':id',
        component: fromBooks.BookDetailComponent,
        resolve: {
          book: BookResolve,
        },
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  // {
  //   path: ':id',
  //   component: fromBooks.BookDetailComponent,
  // },
  // {
  //   path: 'books/:id',
  //   component: fromBooks.BookDetailComponent,
  // },
  // {
  //   path: 'books/books/:id',
  //   component: fromBooks.BookDetailComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
