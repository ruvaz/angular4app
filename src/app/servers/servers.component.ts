import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: `[app-servers]`,  //by attribute ID
  // selector:'.app-servers',  //by class
  // templateUrl: './servers.component.html',  //file template
  styleUrls: ['./servers.component.css'], //file style.css
  template: `
    <app-server></app-server> 
  `
})
//html template

export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
