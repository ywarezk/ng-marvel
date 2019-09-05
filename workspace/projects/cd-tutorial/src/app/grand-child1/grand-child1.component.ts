import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child1',
  template: `
    <p>
      grand-child1 works! {{sayHello()}}
    </p>
  `,
  styles: []
})
export class GrandChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello = () => {
    console.log('GrandChild1Component CD');
  }

}
