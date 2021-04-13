import { TestBed } from '@angular/core/testing';

import { MultiSelectUiLibService } from './multi-select-ui-lib.service';

describe('MultiSelectUiLibService', () => {
  let service: MultiSelectUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiSelectUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
