import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkenPage } from './parken.page';

describe('ParkenPage', () => {
  let component: ParkenPage;
  let fixture: ComponentFixture<ParkenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParkenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
