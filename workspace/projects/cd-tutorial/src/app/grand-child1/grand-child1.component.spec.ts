import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChild1Component } from './grand-child1.component';

describe('GrandChild1Component', () => {
  let component: GrandChild1Component;
  let fixture: ComponentFixture<GrandChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
