import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MinistryComponent } from './ministry/ministry.component';


const routes: Routes = [
  {path: 'contacts' , component: ContactComponent},
  {path: 'ministries' , component: MinistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
