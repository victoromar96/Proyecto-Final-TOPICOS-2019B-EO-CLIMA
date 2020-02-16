import { TestBed } from '@angular/core/testing';

import { Weather2Service } from './weather2.service';

describe('Weather2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Weather2Service = TestBed.get(Weather2Service);
    expect(service).toBeTruthy();
  });
});
