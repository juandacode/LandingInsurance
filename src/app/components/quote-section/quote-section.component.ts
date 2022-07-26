import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss']
})
export class QuoteSectionComponent implements OnInit {
  titleQuoteSection: string = "Ingresa ahora para recibir una cotización gratuita";
  constructor() { }

  ngOnInit(): void {
  }

}
