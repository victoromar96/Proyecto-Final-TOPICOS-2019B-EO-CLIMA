import { TestBed } from '@angular/core/testing';

import { Weather4Service } from './weather4.service';

describe('Weather4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Weather4Service = TestBed.get(Weather4Service);
    expect(service).toBeTruthy();
  });
});
