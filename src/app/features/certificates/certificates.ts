import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})

export class Sertificate {
  certificates: Certificate[] = [
    {
      id: '1',
      name: 'Certificate 27918494',
      image: '/img/27918494_en.png'
    },
    {
      id: '2',
      name: 'Certificate 31681674',
      image: '/img/31681674_en.png'
    },
    {
      id: '3',
      name: 'Certificate 1757925926431',
      image: '/img/1757925926431.jpg'
    },
    {
      id: '4',
      name: 'Certificate 1758022834047',
      image: '/img/1758022834047.jpg'
    }
  ];
}
