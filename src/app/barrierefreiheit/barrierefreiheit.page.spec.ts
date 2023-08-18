import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarrierefreiheitPage } from './barrierefreiheit.page';

describe('BarrierefreiheitPage', () => {
  let component: BarrierefreiheitPage;
  let fixture: ComponentFixture<BarrierefreiheitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BarrierefreiheitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
