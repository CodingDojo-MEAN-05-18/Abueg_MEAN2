import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css'],
})
export class QuoteNewComponent implements OnInit {
  @Input() quotes;
  constructor() {}

  ngOnInit() {}
}
