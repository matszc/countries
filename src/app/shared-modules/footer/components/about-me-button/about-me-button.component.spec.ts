import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeButtonComponent } from './about-me-button.component';

describe('AboutMeButtonComponent', () => {
  let component: AboutMeButtonComponent;
  let fixture: ComponentFixture<AboutMeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
