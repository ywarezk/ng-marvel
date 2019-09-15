import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [
        {
          provide : HttpClient,
          useValue: httpSpy
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('server returns 4 elements - 4 lis', async(() => {
    httpSpy.get.and.returnValue(
      of([
        {title: 'hello'},
        {title: 'world'},
        {title: 'foo'},
        {title: 'bar'},
      ]).pipe(
        delay(100)
      )
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const lis = fixture.debugElement.queryAll(By.css('li'));
      expect(lis.length).toBe(4);
    })
    
  }));

  it('server returns 4 elements - 4 lis', fakeAsync(() => {
    httpSpy.get.and.returnValue(
      of([
        {title: 'hello'},
        {title: 'world'},
        {title: 'foo'},
        {title: 'bar'},
      ]).pipe(
        delay(100)
      )
    );
    fixture.detectChanges();
    tick(100);
    fixture.detectChanges();
    const lis = fixture.debugElement.queryAll(By.css('li'));
    expect(lis.length).toBe(4);

    // fixture.whenStable().then(() => {
    //   fixture.detectChanges();
    //   const lis = fixture.debugElement.queryAll(By.css('li'));
    //   expect(lis.length).toBe(4);
    // })
    
  }));
});
