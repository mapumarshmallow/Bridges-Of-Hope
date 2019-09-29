import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './homepage/title/title.component';
import { HeaderComponent } from './homepage/header/header.component';
import { BodyComponent } from './homepage/body/body.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { MinistryComponent } from './ministry/ministry.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MinCampHopeComponent } from './min-camp-hope/min-camp-hope.component';
import { MinCampCarouselComponent } from './min-camp-carousel/min-camp-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    BodyComponent,
    NavBarComponent,
    ContactComponent,
    MinistryComponent,
    HomepageComponent,
    MinCampHopeComponent,
    MinCampCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
