import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  author = "Written by: Tu Uyen (Tiv) Tran";
  title = "Welcome to BRIDGES OF HOPE--Hope for the Fatherless.";
  
}
