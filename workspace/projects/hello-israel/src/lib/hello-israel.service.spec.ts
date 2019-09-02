import { TestBed } from '@angular/core/testing';

import { HelloIsraelService } from './hello-israel.service';

describe('HelloIsraelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloIsraelService = TestBed.get(HelloIsraelService);
    expect(service).toBeTruthy();
  });
});
