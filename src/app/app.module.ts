import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './home-page/title/title.component';
import { HeaderComponent } from './home-page/header/header.component';
import { BodyComponent } from './home-page/body/body.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { MinistryComponent } from './ministry/ministry.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    BodyComponent,
    NavBarComponent,
    ContactComponent,
    MinistryComponent
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
