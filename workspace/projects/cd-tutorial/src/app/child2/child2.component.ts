import { Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import {interval, Observable, BehaviorSubject, Subject} from 'rxjs';

// declare var Zone : any;

@Component({
  selector: 'app-child2',
  template: `
    <p (click)="mouseOverHello()">
      child2 works! {{sayHello()}}
    </p>
    <p>
     {{msgObj.msg}}
    </p>
    
    <p>
      {{title$ | async}}
    </p>
    <p>
      {{title2$ | async}}
    </p>
    <app-grand-child2></app-grand-child2>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {
  @Input() msgObj = {msg: 'hello world'}
  // counter$ : Observable<number>;

  title$ : Subject<string> = new BehaviorSubject('foo');
  title2$ : Promise<string> = Promise.resolve('foo2');

  constructor(
    private angularZoneService : NgZone, 
    private _cd : ChangeDetectorRef,
  ) { }

  ngOnInit() {
    // this.counter$ = interval(1000);

    setTimeout(() => {
      this.title$.next('bar');
      this.title2$ = Promise.resolve('bar2');
      // this.title = 'bar';
    }, 2000);

    // setTimeout(() => {
    //   console.log('setTimeout in child2');
    //   this._cd.detectChanges();
    // }, 2000); 

    // console.log(Zone.current.name);

    // this.angularZoneService.runOutsideAngular(() => {
    //   let counter = 0;
    //   setInterval(() => {
    //     this.title = `bar ${counter}`;
    //     console.log('i dont want to trigger cd');
    //     counter++;
    //     if (counter % 3 === 0) {
    //       this._cd.detectChanges();
    //       // trigger cd
    //     }
    //   }, 1000);
    // })

    
  }

  sayHello = () => {
    console.log('Child2Component CD');
  }

  mouseOverHello = () => {
    console.log('mouseOverHello');
  } 

}
