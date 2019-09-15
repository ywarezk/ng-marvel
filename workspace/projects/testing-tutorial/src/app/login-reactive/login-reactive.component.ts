import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reactive',
  template: `
    <form id="login" [formGroup]="loginForm" (ngSubmit)="login()">
      <div class="form-group">
        <input 
          formControlName="email"
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
          formControlName="password"
          type="password" class="form-control" placeholder="Password" />
      </div>
      <div class="form-group">
        <button 
          form="login"
          [disabled]="loginForm.invalid" type="submit" disabled>Submit</button>
      </div>
    </form>
  `,
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  loginForm : FormGroup = this._fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  constructor(
    private _fb : FormBuilder,
    private _http : HttpClient,
    private _router : Router
  ) { }

  ngOnInit() {
  }

  login = () => {
    // alert('hello');
    this._http
      .post('https://api.marvell.com/login', this.loginForm.value)
      .subscribe(() => {
        this._router.navigateByUrl('/restricted');
      })
  }

}
