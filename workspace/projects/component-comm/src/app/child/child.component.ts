import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _hello : HelloService) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('passing to another child');
      this._hello.hello.next('hello from child');
    }, 2000)
  }

}
