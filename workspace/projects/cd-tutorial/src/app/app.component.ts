import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cd-tutorial';
  passToChild2 = {msg: 'hello felix'};

  sayHello = () => {
    console.log('AppComponent CD');
    return Math.random();
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('appcomponent timer');
      this.passToChild2 = {msg: 'goodbye felix'};
      // this.passToChild2['msg'] = 'goodbye felix';
    }, 2000);

    // setTimeout(() => {
    //   // this.title = 'different value';
    //   console.log('timeout - is Angular running cd? ');
    // }, 1000);
  }
}

