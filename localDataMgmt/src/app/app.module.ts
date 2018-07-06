import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { CompAComponent } from './data/comp-a/comp-a.component';
import { CompBComponent } from './data/comp-b/comp-b.component';
import { DataService } from './data/data.service';
import { CompCComponent } from './data/comp-c/comp-c.component';

@NgModule({
  declarations: [AppComponent, DataComponent, CompAComponent, CompBComponent, CompCComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
