import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-section',
  templateUrl: './fill-section.component.html',
  styleUrls: ['./fill-section.component.scss']
})
export class FillSectionComponent implements OnInit {
  fillSectionImage: string = '../../../../assets/images/fill-section-image.png';
  constructor() { }

  ngOnInit(): void {
  }

}
