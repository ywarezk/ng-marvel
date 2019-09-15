import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-template',
  template: `
  <form id="login" #loginForm="ngForm" (ngSubmit)="login(loginForm)">
    <div class="form-group">
      <input 
        ngModel
        name="email"
        type="email" class="form-control" placeholder="email" />
      <div class="alert alert-danger" *ngIf="loginForm.controls.email.touched && loginForm.controls.email.invalid" >
        <ng-container *ngIf="loginForm.controls.email.errors.email">
          The Email format is Invalid
        </ng-container>
        <ng-container *ngIf="loginForm.controls.email.errors.required">
          This field is required
        </ng-container>
      </div>
    </div>
    <div class="form-group">
      <input 
        name="password"
        ngModel
        type="password" class="form-control" placeholder="Password" />
    </div>
    <div class="form-group">
      <button 
        form="login"
        [disabled]="loginForm.invalid" type="submit" disabled>Submit</button>
    </div>
  </form>
  `,
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {

  constructor(private _http : HttpClient, private _router : Router) { }

  ngOnInit() {
  }

  login = (loginForm : NgForm) => {
    // alert('hello');
    this._http
      .post('https://api.marvell.com/login', loginForm.value)
      .subscribe(() => {
        this._router.navigateByUrl('/restricted');
      })
  }

}
