import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherChild2Component } from './another-child2.component';

describe('AnotherChild2Component', () => {
  let component: AnotherChild2Component;
  let fixture: ComponentFixture<AnotherChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
