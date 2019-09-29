import { Component, OnInit } from '@angular/core';
import { Heading } from './title';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title: Heading = {
    id: 1,
    name: 'Home'
  }
  constructor() { }

  ngOnInit() {
  }
  heading = 'Home';
}
