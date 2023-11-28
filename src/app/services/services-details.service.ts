import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesDetailsService {
  constructor() {}

  data = [
    {
      id: 1,
      title: 'cameras',
      subtitle: 'subtitle',
      summary: 'summary',
      image: 'assets/images/service/security.jpeg',
      details: {
        title: 'cameras',
        description: 'description',
        images: [
          'assets/images/service/1.jpeg',
          'assets/images/service/2.jpeg',
        ],
      },
    },
    {
      id: 2,
      title: 'printers',
      subtitle: 'subtitle',
      description: 'Service 2 description',
      image: 'assets/images/service/8.jpeg',
    },
    {
      id: 3,
      title: 'interaction',
      subtitle: 'subtitle',
      description: 'Service 3 description',
      image: 'assets/images/service/1.jpeg',
    },
    {
      id: 4,
      title: 'queuing',
      subtitle: 'subtitle',
      description: 'Service 4 description',
      image: 'assets/images/service/2.jpeg',
    },
    {
      id: 5,
      title: 'software',
      subtitle: 'subtitle',
      description: 'Service 4 description',
      image: 'assets/images/service/3.jpeg',
    },
    {
      id: 6,
      title: 'sale',
      subtitle: 'subtitle',
      description: 'Service 4 description',
      image: 'assets/images/service/4.jpeg',
    },
    {
      id: 7,
      title: 'security',
      subtitle: 'subtitle',
      description: 'Service 4 description',
      image: 'assets/images/service/5.jpeg',
    },
    {
      id: 8,
      title: 'networks',
      subtitle: 'subtitle',
      description: 'Service 4 description',
      image: 'assets/images/service/6.jpeg',
    },
  ];
  getSpecificService(id: number) {
    return this.data.find((x) => x.id === id);
  }
}
