import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactiveComponent } from './login-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('LoginReactiveComponent', () => {
  let component: LoginReactiveComponent;
  let fixture: ComponentFixture<LoginReactiveComponent>;
  const httpSpy = jasmine.createSpyObj('HttpClient', ['post']);
  // {navigateByUrl: spy}
  const routerSpy =  jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginReactiveComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {provide: HttpClient, useValue: httpSpy},
        {provide: Router, useValue: routerSpy},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('is our email validation working', () => {
    // find the input
    const emailInput : DebugElement = fixture.debugElement.query(By.css('input[name="email"]'));
    emailInput.nativeElement.value = 'yariv';
    emailInput.nativeElement.dispatchEvent(new Event('input'));
    emailInput.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    const errorLi : DebugElement = fixture.debugElement.query(By.css('div.alert-danger'));
    expect(errorLi.nativeElement.innerText).toBe('The Email format is Invalid');

    const button : DebugElement = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(button.nativeElement.disabled).toBe(true);
  });

  fit('login logic', () => {
    const emailInput : DebugElement = fixture.debugElement.query(By.css('input[name="email"]'));
    emailInput.nativeElement.value = 'yariv@nerdeez.com';
    emailInput.nativeElement.dispatchEvent(new Event('input'));
    emailInput.nativeElement.dispatchEvent(new Event('blur'));

    const passwordInput : DebugElement = fixture.debugElement.query(By.css('input[name="password"]'));
    passwordInput.nativeElement.value = '12345678';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    passwordInput.nativeElement.dispatchEvent(new Event('blur'));

    httpSpy.post.and.returnValue(of(
      {
        firstName: 'yariv',
        lastName: 'katz',
        jwtToken: 'hello'
      }
    ));

    routerSpy.navigateByUrl.and.returnValue(null);


    fixture.detectChanges();
    const form : DebugElement = fixture.debugElement.query(By.css('form'));
    form.nativeElement.dispatchEvent(new Event('submit'));
    
    expect(httpSpy.post.calls.count()).toBe(1);
    // ['https://api.marvell.com/login', {email: ..., password: ''}]
    expect(httpSpy.post.calls.argsFor(0)[1]).toEqual({
      email: 'yariv@nerdeez.com',
      password: '12345678'
    });
    expect(routerSpy.navigateByUrl.calls.count()).toBe(1);
    expect(routerSpy.navigateByUrl.calls.argsFor(0)).toEqual([
      '/restricted'
    ]);

  });
});
