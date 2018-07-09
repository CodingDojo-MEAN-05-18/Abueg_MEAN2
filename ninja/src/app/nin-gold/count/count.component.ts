import { Component, OnInit } from '@angular/core';
import { NinGoldService } from '../nin-gold.service';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  count: number = 0;
  constructor(private ninGoldService: NinGoldService) {}

  ngOnInit() {
    this.count = this.ninGoldService.retrieveCount();
  }
}
