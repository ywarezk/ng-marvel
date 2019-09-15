import { TestBed } from '@angular/core/testing';

import { HelloService } from './hello.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('HelloService', () => {
  let helloService : HelloService;
  const mockHttp = {
    get: (url : string) => of([
      {title: 'hello'},
      {title: 'world'},
      {title: 'foo'},
      {title: 'bar'},
    ])
  }

  // {get: spy}
  const mockHttpSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => TestBed.configureTestingModule({
    // imports: [HttpClientTestingModule],
    providers: [
      // {provide: HttpClient, useValue: mockHttp}
      {provide: HttpClient, useValue: mockHttpSpy}
    ]
  }));

  beforeEach(() => {
    helloService = TestBed.get(HelloService);
  });

  it('should be created', () => {
    expect(helloService).toBeTruthy();
  });

  it('should return hello world', () => {
    expect(helloService.sayHello()).toBe('hello world');
  });

  // it('should return hello world2', () => {
  //   const service = new HelloService({});
  //   expect(service.sayHello()).toBe('hello world');
  // });

  it('should count 4 items from the server', (done) => {
    mockHttpSpy.get.and.returnValue(
      of([
        {title: 'hello'},
        {title: 'world'},
        {title: 'foo'},
        {title: 'bar'},
      ])
    )
    helloService.countTasks().subscribe((num : number) => {
      expect(num).toBe(4);
      expect(mockHttpSpy.get.calls.count()).toBe(1);
      // expect(mockHttpSpy.get.calls.withArgs).toBe(1);
      done();
    });
  })
});
