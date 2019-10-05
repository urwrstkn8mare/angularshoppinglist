import { TestBed } from '@angular/core/testing';

import { ShoppinglistitemsService } from './shoppinglistitems.service';

describe('ShoppinglistitemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppinglistitemsService = TestBed.get(ShoppinglistitemsService);
    expect(service).toBeTruthy();
  });
});
