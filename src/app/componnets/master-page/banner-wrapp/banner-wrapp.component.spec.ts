import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWrappComponent } from './banner-wrapp.component';

describe('BannerWrappComponent', () => {
  let component: BannerWrappComponent;
  let fixture: ComponentFixture<BannerWrappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerWrappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWrappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
