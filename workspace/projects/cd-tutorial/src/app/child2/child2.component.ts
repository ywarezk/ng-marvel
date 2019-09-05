import { Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p (mouseover)="mouseOverHello()">
      child2 works! {{sayHello()}}
    </p>
    <p>
      {{title}}
    </p>
    <app-grand-child2></app-grand-child2>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {
  title = 'foo';

  constructor(private angularZoneService : NgZone, private _cd : ChangeDetectorRef) { }

  ngOnInit() {

    this.angularZoneService.runOutsideAngular(() => {
      let counter = 0;
      setInterval(() => {
        this.title = `bar ${counter}`;
        console.log('i dont want to trigger cd');
        counter++;
        if (counter % 3 === 0) {
          this._cd.detectChanges();
          // trigger cd
        }
      }, 1000);
    })

    
  }

  sayHello = () => {
    console.log('Child2Component CD');
  }

  mouseOverHello = () => {
    console.log('mouseOverHello');
  } 

}
