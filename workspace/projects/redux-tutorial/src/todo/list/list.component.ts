import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { SetTasks } from '../actions/todo.actions';
import { Observable } from 'rxjs';
import { selectAll, TodoState } from '../reducers/todo.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let task of (tasks$ | async)">
        {{task.title}}
      </li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  tasks$ : Observable<any[]> = this._store$.pipe(
    select('todo'),
    map((todoState : TodoState) => {
      return selectAll(todoState);
    })
  )

  constructor(
    private _http : HttpClient,
    private _store$ : Store<any>
  ) { }

  ngOnInit() {
    this._http
      .get('https://nztodo.herokuapp.com/api/task/?format=json')
      .subscribe((tasks : any[]) => {
        this._store$.dispatch(new SetTasks(tasks))
      })
  }

}
