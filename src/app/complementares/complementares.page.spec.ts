import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaresPage } from './complementares.page';

describe('ComplementaresPage', () => {
  let component: ComplementaresPage;
  let fixture: ComponentFixture<ComplementaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
