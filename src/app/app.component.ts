import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import {
  faDollar,
  faThumbsUp,
  faHeadset,
  faMicrochip,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from './services/layout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  #layoutService = inject(LayoutService);
  #translateService = inject(TranslateService);

  currentLang = this.#layoutService.language();

  title = 'algorithm';
  isTransparentNavbar: boolean = true;
  faCoffee = faComment;
  faDollar = faDollar;
  faThumbsUp = faThumbsUp;
  faHeadset = faHeadset;
  faMicrochip = faMicrochip;
  faAward = faAward;
}
