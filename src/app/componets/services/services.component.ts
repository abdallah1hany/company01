import { Component, OnInit, inject } from '@angular/core';
import { ServicesDetailsService } from 'src/app/services/services-details.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  #servicesDetailsService = inject(ServicesDetailsService);
  services = this.#servicesDetailsService.data;

  constructor() {}
  ngOnInit(): void {
    console.log('services', this.services);
  }
}
