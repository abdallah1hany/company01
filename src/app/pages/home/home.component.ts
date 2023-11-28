import { Component, HostListener, OnInit, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../../services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  #layoutService = inject(LayoutService);
  #translateService = inject(TranslateService);

  currentLang = this.#layoutService.language();

  title = 'algorithm';
  isTransparentNavbar: boolean = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTransparentNavbar = window.scrollY < 100;
  }
  constructor(private router: Router) {}

  ngOnInit() {
    this.changeLanguage('ar');
    this.isTransparentNavbar = this.router.url === '/';
  }
  get navbarClasses() {
    return {
      'mb-5': this.router.url !== '/',
    };
  }
  changeLanguage(language: 'ar' | 'en') {
    localStorage.setItem('lang', language);
    console.log('changeLayout', language);
    this.#translateService.use(language);
    this.#layoutService.setLanguage(language);
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    this.changeLayout(language === 'ar' ? 'rtl' : 'ltr');
    // location.reload();
  }

  changeLayout(layout: 'ltr' | 'rtl') {
    this.#layoutService.setLayout(layout);
  }
}
