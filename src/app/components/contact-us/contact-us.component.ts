import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contact: string = 'Sea parte de nuestra familia';
  contactUsImage: string = '../../../../assets/images/contact-us-image.png';
  contactUsCalendar: string = '../../../../assets/icons/calendar.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
