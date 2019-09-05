import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works! {{sayHello()}}
    </p>
    <app-grand-child1></app-grand-child1>
  `,
  styles: []
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello = () => {
    console.log('Child1Component CD');
  }

}
