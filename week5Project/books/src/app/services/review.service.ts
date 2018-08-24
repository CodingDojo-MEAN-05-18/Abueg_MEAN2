import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { REVIEWS } from '../data/review-data';
import { Review } from '../review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  baseurl = '/api/reviews/';
  reviews: Review[] = [];
  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    console.log('getting all book reviews');
    return this.http.get<Review[]>(this.baseurl);
  }

  getSomeReviews(id): Observable<Review[]> {
    console.log('getting the books reviews ... i think?');
    return this.http.get<Review[]>(`${this.baseurl}?book:${id}`);
  }

  getOneReview(reviewID): Observable<Review> {
    console.log('getting a single review? ');
    return this.http.get<Review>(this.baseurl + reviewID);
  }

  addReview(review: Review): Observable<Review> {
    console.log('adding a new book review? I think.. ugh', review);
    return this.http.post<Review>(this.baseurl, review);
  }

  updateBike(review: Review): Observable<Review> {
    console.log('update the review? humm....');
    return this.http.put<Review>(this.baseurl + review._id, review);
  }

  deleteReview(reviewID): Observable<Review> {
    console.log('deleting a specific review');
    return this.http.delete<Review>(this.baseurl + reviewID);
  }
}
