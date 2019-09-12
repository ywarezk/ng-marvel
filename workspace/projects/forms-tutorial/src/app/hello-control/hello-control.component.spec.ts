import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloControlComponent } from './hello-control.component';

describe('HelloControlComponent', () => {
  let component: HelloControlComponent;
  let fixture: ComponentFixture<HelloControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
