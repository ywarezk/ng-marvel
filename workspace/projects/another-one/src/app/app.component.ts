import { Component } from '@angular/core';

declare var require : any;

const piglet = require('./piglet.jpg');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pigletUrl = piglet;
}
