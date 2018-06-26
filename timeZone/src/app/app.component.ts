import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Time Zone';
  color = 'white';
  switch: Boolean = true;
  time = new Date();
  nullZone = null;
  onButtonClick(value) {
    alert('Value is: ' + value);
    console.log('Value is: ' + value);
    if (value === 'PST') {
      this.color = 'yellow';
    } else if (value === 'MST') {
      this.color = 'green';
    }
    this.color = 'white';
  }
  zoneData(timezone) {
    this.time = new Date();
    if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() + 1);
      this.color = 'yellow';
    } else if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
      this.color = 'yellow';
    }
    this.nullZone = timezone;
    this.color = 'white';
  }
}
