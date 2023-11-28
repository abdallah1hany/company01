import { Component } from '@angular/core';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import {
  faDollar,
  faThumbsUp,
  faHeadset,
  faMicrochip,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  faCoffee = faComment;
  faDollar = faDollar;
  faThumbsUp = faThumbsUp;
  faHeadset = faHeadset;
  faMicrochip = faMicrochip;
  faAward = faAward;
}
