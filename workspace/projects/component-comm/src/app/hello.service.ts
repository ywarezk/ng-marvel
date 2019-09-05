import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  hello : Subject<string> = new Subject();

  constructor() { }
}
