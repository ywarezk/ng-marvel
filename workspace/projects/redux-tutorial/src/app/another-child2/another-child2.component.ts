import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {State} from '../reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-another-child2',
  template: `
    <p>
      another-child2 works!
    </p>
    <p>
      {{message$ | async}}
    </p>

  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnotherChild2Component implements OnInit {
  message$ : Observable<string> = this._store$.pipe(
    select('hello', 'msg'),
    // map((state : State) => {
    //   return state.hello.msg;
    // })
  )

  constructor(private _store$ : Store<State>) { }

  ngOnInit() {
  }

}
