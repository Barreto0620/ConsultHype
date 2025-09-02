import { TestBed } from '@angular/core/testing';

import { Consultants } from './consultants';

describe('Consultants', () => {
  let service: Consultants;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consultants);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
