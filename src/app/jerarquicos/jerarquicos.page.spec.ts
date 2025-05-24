import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JerarquicosPage } from './jerarquicos.page';

describe('JerarquicosPage', () => {
  let component: JerarquicosPage;
  let fixture: ComponentFixture<JerarquicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JerarquicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
