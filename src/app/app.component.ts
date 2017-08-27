import { Component } from '@angular/core';
import { TranslateService } from "app/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translateService: TranslateService) { }

  selectLanguage(str) {
    return this.translateService.selectLanguage(str);
  }
}
