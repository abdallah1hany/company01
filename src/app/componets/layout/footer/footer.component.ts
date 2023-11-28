import { Component } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import {
  faDollar,
  faThumbsUp,
  faHeadset,
  faMicrochip,
  faAward,
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faFacebook = faFacebook;
  faCoffee = faComment;
  faDollar = faDollar;
  faThumbsUp = faThumbsUp;
  faHeadset = faHeadset;
  faMicrochip = faMicrochip;
  faAward = faAward;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGooglePlus = faGooglePlus;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
