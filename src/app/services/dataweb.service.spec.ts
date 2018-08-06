import { TestBed, inject } from '@angular/core/testing';

import { DatawebService } from './dataweb.service';

describe('DatawebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatawebService]
    });
  });

  it('should be created', inject([DatawebService], (service: DatawebService) => {
    expect(service).toBeTruthy();
  }));
});
