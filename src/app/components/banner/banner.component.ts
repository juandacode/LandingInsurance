import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerImage: string = '../../../assets/images/banner-image-comprimida.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
