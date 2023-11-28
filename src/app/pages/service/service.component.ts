import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesDetailsService } from 'src/app/services/services-details.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  #servicesDetailsService = inject(ServicesDetailsService);
  services = this.#servicesDetailsService.data;

  id: any;
  serviceData: any;
  serviceDetails: any;
  constructor(private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getServiceById(this.id);
    console.log(this.serviceData);
    console.log(this.serviceDetails);
    this.scrollToTop();
  }
  getServiceById(id: number) {
    this.serviceData = this.services.find((service) => service.id == id);
    this.serviceDetails = this.serviceData.details;
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
