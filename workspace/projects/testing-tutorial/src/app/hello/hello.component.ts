import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>
      {{title}}
    </h1>
  `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title = 'hello world'

  constructor() { }

  ngOnInit() {
  }

}
