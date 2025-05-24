import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContabPage } from './contab.page';

describe('ContabPage', () => {
  let component: ContabPage;
  let fixture: ComponentFixture<ContabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
