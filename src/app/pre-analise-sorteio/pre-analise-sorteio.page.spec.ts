import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAnaliseSorteioPage } from './pre-analise-sorteio.page';

describe('PreAnaliseSorteioPage', () => {
  let component: PreAnaliseSorteioPage;
  let fixture: ComponentFixture<PreAnaliseSorteioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAnaliseSorteioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAnaliseSorteioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
