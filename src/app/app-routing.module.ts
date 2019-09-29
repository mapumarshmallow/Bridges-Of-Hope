import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MinistryComponent } from './ministry/ministry.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'contacts' , component: ContactComponent},
  {path: 'ministries' , component: MinistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
