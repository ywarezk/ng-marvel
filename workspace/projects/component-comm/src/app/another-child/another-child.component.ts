import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-another-child',
  template: `
    <div class="another-child">
      <p>
        another-child works! {{msg.message}}
      </p>
    </div>
  `,
  styles: [
    `
      .another-child {
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AnotherChildComponent implements OnInit, OnChanges {
  @Input() msg;

  constructor() { }

  // used for initialization
  // runs once 
  // input properties are populated
  // view display data bound properties
  ngOnInit() {
  }

  // run multiple times
  // when input change
  // ===
  ngOnChanges(change : SimpleChanges) {
    console.log('ngOnChanges');
    console.log(change);
  }

}
