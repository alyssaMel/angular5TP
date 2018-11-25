import { TestBed, inject } from '@angular/core/testing';

import { ListeLivresService } from './liste-livres.service';

describe('ListeLivresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeLivresService]
    });
  });

  it('should be created', inject([ListeLivresService], (service: ListeLivresService) => {
    expect(service).toBeTruthy();
  }));
});
