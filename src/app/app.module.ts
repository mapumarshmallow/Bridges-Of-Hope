import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './home-page/title/title.component';
import { HeaderComponent } from './home-page/header/header.component';
import { BodyComponent } from './home-page/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
