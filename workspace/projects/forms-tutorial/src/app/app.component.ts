import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlValueAccessor } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { felixValidation } from './felix-validation.directive';

@Component({
  selector: 'app-root',
  template: `
    <p>asdfa</p>
    <input type="text" [formControl]="inputFormControl" />
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <input type="email" formControlName="email" email required placeholder="email" />
      {{loginForm.controls?.email.valid}}
      <input type="password" [formControlName]="'password'" />

      <div [formGroup]="loginForm.controls.address">
        <input type="text" placeholder="address" formControlName="street" />
        <input type="text" placeholder="city" formControlName="city" />
      </div>
    </form>

    <app-template-driven></app-template-driven>

    <h1>Custom ngModel</h1>
    <app-hello-control #felixModel="ngModel" [(ngModel)]="hello" appFelixValidation="yariv"></app-hello-control>
    {{felixModel.valid}}

    {{hello}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-tutorial';

  inputFormControl : FormControl = new FormControl({ value: 'Felix', disabled: true });
  loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(5), 
      felixValidation]),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl()
    })
  });

  login = () => {
    console.log(`${this.loginForm.value}`);
  }

  ngOnInit() {
    this.loginForm.controls.email.valueChanges.pipe(
      debounceTime(1000),
      
    )
  }
}
