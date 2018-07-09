import { TestBed, inject } from '@angular/core/testing';

import { NinGoldService } from './nin-gold.service';

describe('NinGoldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinGoldService]
    });
  });

  it('should be created', inject([NinGoldService], (service: NinGoldService) => {
    expect(service).toBeTruthy();
  }));
});
