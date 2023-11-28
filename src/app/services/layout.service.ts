import { Injectable, computed, inject, signal } from '@angular/core';
import { SystemSettingsService } from './system-settings.service';

export type TPosition = 'start' | 'end';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  #systemSettings = inject(SystemSettingsService);
  #position = signal<TPosition>('start');
  position = this.#position.asReadonly();

  constructor() {}
  #language = computed(() => this.#systemSettings.language$());
  language = this.#language;

  setPosition(position: TPosition) {
    this.#position.set(position);
  }

  setLayout(layout: 'ltr' | 'rtl') {
    this.setPosition(layout === 'ltr' ? 'start' : 'end');
  }

  setLanguage(language: 'ar' | 'en') {
    localStorage.setItem('language', language);
    // this.#language.set(language);
    this.#systemSettings.setLanguage(language);
  }
}
