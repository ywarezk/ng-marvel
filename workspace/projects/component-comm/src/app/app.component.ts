import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AnotherChildComponent } from './another-child/another-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'component-comm';
  msgObject = {message: 'hello from parent'};
  
  @ViewChild('anotherChild', {
    static: true
  }) anotherChildInstance : AnotherChildComponent;

  ngOnInit() {
    setTimeout(() => {
      console.log('set timeout is running');
      // this.msgObject = {message: 'foo bar'};
      this.msgObject['message'] = 'foo bar';
    }, 2000)
  }

  alertHello = (msg: string) => {
    alert(msg);
  }

  // runs once
  // @viewChild + @ViewChildren will be populated
  // initialize that needs children to be initialized first
  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.anotherChildInstance.sayHello());
  }
}
