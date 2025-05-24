import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdAgropPage } from './prod-agrop.page';

describe('ProdAgropPage', () => {
  let component: ProdAgropPage;
  let fixture: ComponentFixture<ProdAgropPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAgropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
