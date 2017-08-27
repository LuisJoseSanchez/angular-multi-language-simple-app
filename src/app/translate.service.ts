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
