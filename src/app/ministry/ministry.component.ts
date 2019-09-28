import { Component, OnInit } from '@angular/core';
import data from './ministry.json';
@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
export class MinistryComponent implements OnInit {
  public ministry: any = data;
  constructor() { }

  ngOnInit() {
  }

}
