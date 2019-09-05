import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'component-comm';
  msgObject = {message: 'hello from parent'};

  ngOnInit() {
    setTimeout(() => {
      console.log('set timeout is running');
      // this.msgObject = {message: 'foo bar'};
      this.msgObject['message'] = 'foo bar';
    }, 2000)
  }
}
