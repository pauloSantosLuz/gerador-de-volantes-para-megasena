import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoJogoPage } from './novo-jogo.page';

describe('NovoJogoPage', () => {
  let component: NovoJogoPage;
  let fixture: ComponentFixture<NovoJogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoJogoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoJogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
