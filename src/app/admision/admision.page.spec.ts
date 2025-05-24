import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmisionPage } from './admision.page';

describe('AdmisionPage', () => {
  let component: AdmisionPage;
  let fixture: ComponentFixture<AdmisionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
