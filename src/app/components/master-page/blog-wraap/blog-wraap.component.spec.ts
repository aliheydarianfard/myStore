import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWraapComponent } from './blog-wraap.component';

describe('BlogWraapComponent', () => {
  let component: BlogWraapComponent;
  let fixture: ComponentFixture<BlogWraapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogWraapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogWraapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
