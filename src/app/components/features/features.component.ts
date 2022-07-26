import { Component, OnInit } from '@angular/core';
import { Feature } from '../../models/Feature.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  features: Feature[] = [
    {
      id: 1,
      icon: '../../../assets/icons/feature-icon1.svg',
      title: 'Peace of Mind',
      description: 'So it really behaves like neither. Now we have given up.'
    },
    {
      id: 2,
      icon: '../../../assets/icons/feature-icon2.png',
      title: 'Peace of Mind',
      description: 'So it really behaves like neither. Now we have given up.'
    },
    {
      id: 3,
      icon: '../../../assets/icons/feature-icon3.svg',
      title: 'Peace of Mind',
      description: 'So it really behaves like neither. Now we have given up.'
    },
    {
      id: 1,
      icon: '../../../assets/icons/feature-icon1.svg',
      title: 'Peace of Mind',
      description: 'So it really behaves like neither. Now we have given up.'
    },
    {
      id: 2,
      icon: '../../../assets/icons/feature-icon2.png',
      title: 'Peace of Mind',
      description: 'So it really behaves like neither. Now we have given up.'
    },
    {
      id: 3,
      icon: '../../../assets/icons/feature-icon3.svg',
      title: 'Peace of Mind',
      description: 'So it really behaves like neither. Now we have given up.'
    }
  ]
}


