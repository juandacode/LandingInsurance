import { Component, OnInit } from '@angular/core';
import { Testimony } from '../../models/Testimony.interface';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  testimonyImage: string = '../../../../assets/images/testimony-image.png';
  testimonyVideo = '../../../assets/videos/Comercial.mp4';
  testimonyLarge = '../../../assets/videos/Testimonial.mp4';
  // Card Testimonies
  testimonies: Testimony[] = [
    {
      id: 1,
      image: '../../../assets/images/testimony1.jpg',
      message: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
      star: '../../../assets/icons/stars.svg'
    },
    {
      id: 2,
      image: '../../../assets/images/testimony2.jpg',
      message: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
      star: '../../../assets/icons/stars.svg'
    },
    {
      id: 3,
      image: '../../../assets/images/testimony3.jpg',
      message: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
      star: '../../../assets/icons/stars.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
