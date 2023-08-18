import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnschriftPage } from './anschrift.page';

describe('AnschriftPage', () => {
  let component: AnschriftPage;
  let fixture: ComponentFixture<AnschriftPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnschriftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
