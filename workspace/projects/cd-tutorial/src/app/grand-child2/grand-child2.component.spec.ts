import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChild2Component } from './grand-child2.component';

describe('GrandChild2Component', () => {
  let component: GrandChild2Component;
  let fixture: ComponentFixture<GrandChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
