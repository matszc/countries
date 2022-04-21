import { TestBed } from '@angular/core/testing';

import { BackLocationRouteService } from './back-location-route.service';

describe('BackLocationRouteService', () => {
  let service: BackLocationRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackLocationRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
