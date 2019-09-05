import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cd-tutorial';

  sayHello = () => {
    console.log('AppComponent CD');
    return Math.random();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   // this.title = 'different value';
    //   console.log('timeout - is Angular running cd? ');
    // }, 1000);
  }
}

