import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  // beforeEach( async () => {

  // })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('we have h1 with hello world', () => {
    const h1 : DebugElement = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('hello world');
  });
});
