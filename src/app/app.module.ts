import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Translate Language
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/pages/home/home.component';
import { FormUserComponent } from './components/forms/form-user/form-user.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { MultiLanguageComponent } from './components/multi-language/multi-language.component';
import { SliderImageComponent } from './components/slider-image/slider-image.component';
import { FillSectionComponent } from './components/fill-section/fill-section.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TestimonyComponent } from './components/testimony/testimony.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ButtonChatComponent } from './components/button-chat/button-chat.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { VideoTestimonyComponent } from './components/video-testimony/video-testimony.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { AgentsComponent } from './components/pages/agents/agents.component';
import { QuoterComponent } from './components/pages/quoter/quoter.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { QuoteSectionComponent } from './components/quote-section/quote-section.component';
import { FeaturesComponent } from './components/features/features.component';
import { FormHomeComponent } from './components/forms/form-home/form-home.component';
import { HomeInsuranceComponent } from './components/home-insurance/home-insurance.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormUserComponent,
    PrivacyPolicyComponent,
    MultiLanguageComponent,
    SliderImageComponent,
    FillSectionComponent,
    ContactUsComponent,
    TestimonyComponent,
    DatePickerComponent,
    ButtonChatComponent,
    CookiesComponent,
    VideoTestimonyComponent,
    BannerComponent,
    ServicesComponent,
    AgentsComponent,
    QuoterComponent,
    ContactComponent,
    QuoteSectionComponent,
    FeaturesComponent,
    FormHomeComponent,
    HomeInsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
