import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroApostaPage } from './tela-cadastro-aposta.page';

describe('TelaCadastroApostaPage', () => {
  let component: TelaCadastroApostaPage;
  let fixture: ComponentFixture<TelaCadastroApostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCadastroApostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroApostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
