import { TestBed } from '@angular/core/testing';

import { Weather3Service } from './weather3.service';

describe('Weather3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Weather3Service = TestBed.get(Weather3Service);
    expect(service).toBeTruthy();
  });
});
