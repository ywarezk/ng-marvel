/**
 * get the list of todo tasks from the server
 * display them in a list
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks$ : Observable<any>;

  constructor(private _http : HttpClient) { }

  ngOnInit() {
    this.tasks$ = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }

}
