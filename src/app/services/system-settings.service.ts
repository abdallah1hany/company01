import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SystemSettingsService {
  #translateService = inject(TranslateService);

  #language = signal<'en' | 'ar' | null>(
    localStorage.getItem('lang')
      ? (localStorage.getItem('language') as 'ar' | 'en')
      : 'ar'
  );
  language$ = this.#language.asReadonly();

  setLanguage(language: 'en' | 'ar') {
    localStorage.setItem('language', language);
    this.#language.set(language);
  }

  changeLanguage(language: 'ar' | 'en') {
    localStorage.setItem('language', language);
    this.#translateService.use(language);
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    // this.changeLayout(language === 'ar' ? 'rtl' : 'ltr');
    // location.reload();
  }
}
