import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo: string = '../../../assets/icons/logo.png';
  hamburgerMenu: string = '../../../assets/icons/hamburger-menu.svg';
  flagSpain: string = '../../../assets/icons/flag-spain.svg';
  flagEnglish: string = '../../../assets/icons/flag-usa.svg';
  toggleHamburger: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleHamburgerMenu() {
    this.toggleHamburger = !this.toggleHamburger;
  }

}
