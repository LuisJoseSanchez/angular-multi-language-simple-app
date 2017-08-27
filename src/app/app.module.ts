import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from "app/translate.service";

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
