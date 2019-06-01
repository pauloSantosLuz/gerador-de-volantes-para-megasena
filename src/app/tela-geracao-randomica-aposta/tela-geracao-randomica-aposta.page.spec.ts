import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaGeracaoRandomicaApostaPage } from './tela-geracao-randomica-aposta.page';

describe('TelaGeracaoRandomicaApostaPage', () => {
  let component: TelaGeracaoRandomicaApostaPage;
  let fixture: ComponentFixture<TelaGeracaoRandomicaApostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaGeracaoRandomicaApostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaGeracaoRandomicaApostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
