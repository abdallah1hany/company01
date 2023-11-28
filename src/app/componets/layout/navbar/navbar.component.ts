import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isTransparentNavbar: boolean = true;
  #layoutService = inject(LayoutService);
  #translateService = inject(TranslateService);

  currentLang = this.#layoutService.language();
  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTransparentNavbar = window.scrollY < 100;
  }

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
