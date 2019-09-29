import { Component, OnInit } from '@angular/core';
import datas from './ministries.json';
import specialDatas from './ministries-extended.json';

@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
export class MinistryComponent implements OnInit {
  public ministries: any = datas;
  public extendedMinistries: any = specialDatas;
  public extendedMinistries_areas: any;
  
  constructor() { }

  ngOnInit() {
    this.extendedMinistries_areas = this.extendedMinistries[0].areas;
  }

}
