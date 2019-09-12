import { Component, OnInit, ViewChild } from '@angular/core';
import {NgModel, NgForm} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-template-driven',
  template: `
    <h1>Tempate driven</h1>
    <input [(ngModel)]="title" />
    <form #loginForm="ngForm" (ngSubmit)="login(loginForm)">
      <input 
        #emailNgModel="ngModel"
        type="email" name="email" email maxlength minlength required pattern ngModel />
      <p>
        sdfs
        {{loginForm.controls.email?.value}}
      </p>
      <input type="password" name="password" ngModel />
    </form>
  `,
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('loginForm', {static: true}) private _loginForm : NgForm;
  @ViewChild('emailNgModel', {static: true}) private _emailModel : NgModel;

  constructor() { }

  ngOnInit() {
  }

  login = (form : NgForm) => {
    console.log(form.value);
  }

  ngAfterViewInit() {
    this._emailModel.control.valueChanges.pipe(
      debounceTime(1000)
    )
  }

}
