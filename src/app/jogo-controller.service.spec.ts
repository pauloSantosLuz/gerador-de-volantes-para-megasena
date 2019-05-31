import { TestBed } from '@angular/core/testing';

import { JogoControllerService } from './jogo-controller.service';

describe('JogoControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JogoControllerService = TestBed.get(JogoControllerService);
    expect(service).toBeTruthy();
  });
});
