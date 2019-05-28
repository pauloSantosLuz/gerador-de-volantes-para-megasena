import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInformacaoApostaPage } from './tela-informacao-aposta.page';

describe('TelaInformacaoApostaPage', () => {
  let component: TelaInformacaoApostaPage;
  let fixture: ComponentFixture<TelaInformacaoApostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInformacaoApostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInformacaoApostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
