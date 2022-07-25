import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
  imageLanguage = false;
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['english', 'spanish']);
    this.translateService.setDefaultLang('spanish');
  }

  changeLanguage() {
    const currentLang = this.translateService.currentLang;
    if (currentLang === 'english') {
      this.translateService.use('spanish');
      this.imageLanguage = true;
    } else {
      this.translateService.use('english');
    }
  }
}
