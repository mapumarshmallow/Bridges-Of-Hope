import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("Menu-bar").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("Menu-bar").style.width = "0";
  }
  showFiller = false;
}
