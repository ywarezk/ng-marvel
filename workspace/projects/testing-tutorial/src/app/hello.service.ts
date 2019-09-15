import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private _http : HttpClient) { }

  sayHello = () => {
    return 'hello world';
  }

  /**
   * call our todo server
   * grab the tasks
   * count them
   * return observable with the number
   */
  countTasks = () : Observable<number> => {
    return this._http
      .get('https://nztodo.herokuapp.com/api/task/?format=json')
      .pipe(
        map((data) => (<any>data).length)
      )
  }
}
