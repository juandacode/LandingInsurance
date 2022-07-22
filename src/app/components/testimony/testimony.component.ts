import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  testimonyImage: string = '../../../../assets/images/testimony-image.png';
  constructor() { }

  ngOnInit(): void {
  }

}
