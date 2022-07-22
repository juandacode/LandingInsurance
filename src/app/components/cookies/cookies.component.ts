import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  iconCookies: string = '../../../assets/icons/cookies.svg';
  imageCookies: string = '../../../assets/images/cookies.svg';
  constructor() { }

  ngOnInit(): void {
  }
  acceptCookies() {
    localStorage.setItem('cookies', 'accepted');
  }
  declineCookies() {
    localStorage.setItem('cookies', 'declined');
  }

}
