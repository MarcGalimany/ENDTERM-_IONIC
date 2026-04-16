import { TestBed } from '@angular/core/testing';

import { CRUDFirebase } from './crud-firebase';

describe('CRUDFirebase', () => {
  let service: CRUDFirebase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDFirebase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
