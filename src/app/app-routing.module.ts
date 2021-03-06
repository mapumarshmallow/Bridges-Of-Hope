import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MinistryComponent } from './ministry/ministry.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MinCampHopeComponent } from './min-camp-hope/min-camp-hope.component';
import { PrayerRequestComponent } from './prayer-request/prayer-request.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'contacts' , component: ContactComponent},
  {path: 'ministries' , component: MinistryComponent},
  {path: 'camphope', component: MinCampHopeComponent},
  {path: 'prayer_request', component: PrayerRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
