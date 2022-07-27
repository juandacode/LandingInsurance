import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/Offer.interface';

@Component({
  selector: 'app-service-offer',
  templateUrl: './service-offer.component.html',
  styleUrls: ['./service-offer.component.scss']
})
export class ServiceOfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  offers: Offer[] = [
    {
      id: 1,
      icon: '../../../assets/icons/service-heartbeat.svg',
      title: 'Seguros de vida',
      image: '../../../assets/images/cotizador-vida.png'
    },
    {
      id: 2,
      icon: '../../../assets/icons/service-users.svg',
      title: 'Seguros Familiares',
      image: '../../../assets/images/cotizador-vida.png'
    },
    {
      id: 3,
      icon: '../../../assets/icons/service-building.svg',
      title: 'Seguros para Compañías',
      image: '../../../assets/images/cotizador-vida.png'
    },
    {
      id: 4,
      icon: '../../../assets/icons/service-hand-heart.svg',
      title: 'Seguros de Salud',
      image: '../../../assets/images/cotizador-vida.png'
    },
    {
      id: 5,
      icon: '../../../assets/icons/service-blind.svg',
      title: 'Planes de retiro',
      image: '../../../assets/images/cotizador-vida.png'
    },
    {
      id: 6,
      icon: '../../../assets/icons/service-search-dolar.svg',
      title: 'Soluciones financieras',
      image: '../../../assets/images/cotizador-vida.png'
    }
  ]

}
