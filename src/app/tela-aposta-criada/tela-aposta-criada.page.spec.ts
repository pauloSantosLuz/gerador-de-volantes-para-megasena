import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaApostaCriadaPage } from './tela-aposta-criada.page';

describe('TelaApostaCriadaPage', () => {
  let component: TelaApostaCriadaPage;
  let fixture: ComponentFixture<TelaApostaCriadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaApostaCriadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaApostaCriadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
