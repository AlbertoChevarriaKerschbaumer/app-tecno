import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArquitectturaPage } from './arquitecttura.page';

describe('ArquitectturaPage', () => {
  let component: ArquitectturaPage;
  let fixture: ComponentFixture<ArquitectturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquitectturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
