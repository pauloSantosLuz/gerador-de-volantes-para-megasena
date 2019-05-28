import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaJogoImportadoPage } from './tela-jogo-importado.page';

describe('TelaJogoImportadoPage', () => {
  let component: TelaJogoImportadoPage;
  let fixture: ComponentFixture<TelaJogoImportadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaJogoImportadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaJogoImportadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
