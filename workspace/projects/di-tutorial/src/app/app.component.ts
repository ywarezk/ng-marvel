import { Component, Inject, OnInit } from '@angular/core';
import {MessageService} from './message.service';
import {messageToken} from '../token';

@Component({
  selector: 'app-root',
  template: `
    <h1>DI</h1>
    <p>{{hello.foo}}</p>
    <p>
      {{myNumber}}
    </p>

    <app-child></app-child>
  `,
  styleUrls: ['./app.component.css'],
  providers: [

  ]
})
export class AppComponent {
  title = 'di-tutorial';

  constructor(
    private _message : MessageService,
    @Inject('foo') public hello : any,
    @Inject(messageToken) public myNumber: number
  ) {

  }
}
