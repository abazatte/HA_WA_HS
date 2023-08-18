import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BahnhofservicesPage } from './bahnhofservices.page';

describe('BahnhofservicesPage', () => {
  let component: BahnhofservicesPage;
  let fixture: ComponentFixture<BahnhofservicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BahnhofservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
