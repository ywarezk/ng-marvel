import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloIsraelComponent } from './hello-israel.component';

describe('HelloIsraelComponent', () => {
  let component: HelloIsraelComponent;
  let fixture: ComponentFixture<HelloIsraelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloIsraelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloIsraelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
