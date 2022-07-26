import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-insurance',
  templateUrl: './home-insurance.component.html',
  styleUrls: ['./home-insurance.component.scss']
})
export class HomeInsuranceComponent implements OnInit {
  homeInsuranceImage: string = '../../../assets/images/cotizador-vida.png';
  homeInsuranceMobile: string = '../../../assets/images/cotizador-vida-mobile.png';
  constructor() { }

  ngOnInit(): void {
  }

}
