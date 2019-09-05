import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child2',
  template: `
    <p>
      grand-child2 works! {{sayHello()}}
    </p>
  `,
  styles: []
})
export class GrandChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello = () => {
    console.log('GrandChild2Component CD');
  }

}
