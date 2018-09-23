import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserScoreComponent } from './user-score/user-score.component';

import { CalculateService } from './calculate.service';

@NgModule({
  declarations: [AppComponent, UserInfoComponent, UserScoreComponent],
  imports: [BrowserModule],
  providers: [CalculateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
