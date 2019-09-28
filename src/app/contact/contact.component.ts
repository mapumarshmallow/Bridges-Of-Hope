import { Component, OnInit } from '@angular/core';
import data from './contact.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public people: any = data;
  constructor() { }

  ngOnInit() {
    console.log(data);
  }

}
