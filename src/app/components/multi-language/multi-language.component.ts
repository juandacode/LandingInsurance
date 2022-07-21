import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrls: ['./multi-language.component.scss']
})
export class MultiLanguageComponent implements OnInit {
  @Output() language = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  changeLanguage(language: boolean) {
    this.language.emit(language);
  }


}
