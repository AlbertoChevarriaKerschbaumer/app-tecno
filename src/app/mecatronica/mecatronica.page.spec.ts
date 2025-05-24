import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MecatronicaPage } from './mecatronica.page';

describe('MecatronicaPage', () => {
  let component: MecatronicaPage;
  let fixture: ComponentFixture<MecatronicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MecatronicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
