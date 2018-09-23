import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [AppComponent, AlphaComponent, BetaComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
