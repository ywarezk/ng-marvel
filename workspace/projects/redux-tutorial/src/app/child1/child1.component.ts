import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SetHelloMessage } from '../hello.actions';
import { Store } from '@ngrx/store';
import {State} from '../reducers';
import { fromEvent, Observable } from 'rxjs';
import { pluck, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works!
    </p>
    <input type="text" #helloInput />
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit, AfterViewInit {
  @ViewChild('helloInput', {static: true}) helloInput : ElementRef<HTMLInputElement>;

  constructor(private _store$ : Store<State>) { }

  ngOnInit() {
  }

  /**
   * according to the text in the input
   * set the state to the new text
   */
  // changeHelloInState = (event) => {
  //   console.log(event.target.value);
  //   this._store$.dispatch(new SetHelloMessage(event.target.value));
  // }

  ngAfterViewInit() {
    // 1.  Observable<Event> => Observable<String>
    // 2. Observable<string> => Observable<string> with time filter
    fromEvent(this.helloInput.nativeElement, 'input').pipe(
      pluck('target', 'value'),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((newMessage : string) => {
      this._store$.dispatch(new SetHelloMessage(newMessage));
    })
  }
}
