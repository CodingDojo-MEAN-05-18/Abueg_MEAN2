import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Binding Example Project';

  onButtonClick(arg1) {
    alert('you clicked me!' + arg1);
    console.log(`click even is working `, arg1);
    console.log(`click event activated.`);
  }
}
