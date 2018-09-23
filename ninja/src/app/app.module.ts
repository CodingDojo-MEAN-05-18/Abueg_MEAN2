import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NinGoldComponent } from './nin-gold/nin-gold.component';
import { CountComponent } from './nin-gold/count/count.component';
import { SelectComponent } from './nin-gold/select/select.component';
import { DisplayComponent } from './nin-gold/display/display.component';
import { NinGoldService } from './nin-gold/nin-gold.service';

@NgModule({
  declarations: [
    AppComponent,
    NinGoldComponent,
    CountComponent,
    SelectComponent,
    DisplayComponent,
  ],
  imports: [BrowserModule],
  providers: [NinGoldService],
  bootstrap: [AppComponent],
})
export class AppModule {}
