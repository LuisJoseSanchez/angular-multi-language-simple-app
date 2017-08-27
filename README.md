# Multi-language simple application in Angular 4

Very simple multi-language application. Translation is done with a pipe: `{{ '¡Hola mundo!' | translate }}`. Base language in this application is Spanish (all the texts are translated from Spanish into English and Russian) but it can be set to English or any other language very easily.

## Screenshots

<img src="es.png">

<img src="en.png">

<img src="ru.png">

## app.component.html

```html
<button (click)="selectLanguage('es')">Español</button>
<button (click)="selectLanguage('en')">English</button>
<button (click)="selectLanguage('ru')">Русский</button>

<h1>{{ '¡Hola mundo!' | translate }}</h1>
<h2>{{ 'rojo' | translate }}</h2>
```

## app.component.ts

```typescript
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
```

## app.module.ts

```typescript
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
```

## translate.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from "app/translate.service";

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) { }

  transform(value: any, args?: any): any {
    return this.translateService.translate(value);
  }
}
```

## translate.service.ts

```typescript
import { Injectable } from '@angular/core';
import { TRANSLATIONS } from './translations'

@Injectable()
export class TranslateService {

  private currentLanguage = 'es';

  constructor() { }

  translate(str) {
    return TRANSLATIONS.filter(entrada => entrada['es'] === str)[0][this.currentLanguage];
  }

  selectLanguage(language) {
    this.currentLanguage = language;
  }

}
```

## translations.ts

```typescript
export const TRANSLATIONS = [
  {
    en: 'Hello world!',
    es: '¡Hola mundo!',
    ru: 'Привет мир!'
  },
  {
    en: 'red',
    es: 'rojo',
    ru: 'красный'
  }
]
```
