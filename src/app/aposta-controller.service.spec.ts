import { TestBed } from '@angular/core/testing';

import { ApostaControllerService } from './aposta-controller.service';

describe('ApostaControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApostaControllerService = TestBed.get(ApostaControllerService);
    expect(service).toBeTruthy();
  });
});
