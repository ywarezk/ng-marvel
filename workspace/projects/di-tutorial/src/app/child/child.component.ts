import { Component, OnInit, Inject, Injector, Optional, Host } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>child {{hello}}</h1>
    <h1>{{message}}</h1>
  `,
  styleUrls: ['./child.component.css'],
  providers: [
    {provide: 'hello', useValue: 'child'}
  ]
})
export class ChildComponent implements OnInit {

  constructor(
    @Inject('hello') public hello : string,
    @Host() @Inject('message') public message : string,
    
    public _injector : Injector
  ) { }

  ngOnInit() {
  }

}
