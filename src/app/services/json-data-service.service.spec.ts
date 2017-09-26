import { TestBed, inject } from '@angular/core/testing';

import { JsonDataServiceService } from './json-data-service.service';

describe('JsonDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonDataServiceService]
    });
  });

  it('should be created', inject([JsonDataServiceService], (service: JsonDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
