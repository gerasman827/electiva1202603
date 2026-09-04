import { TestBed } from '@angular/core/testing';

import { Dependencia } from './dependencia';

describe('Dependencia', () => {
  let service: Dependencia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dependencia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
