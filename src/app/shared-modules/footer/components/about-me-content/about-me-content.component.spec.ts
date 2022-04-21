import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeContentComponent } from './about-me-content.component';

describe('AbautMeContentComponent', () => {
  let component: AboutMeContentComponent;
  let fixture: ComponentFixture<AboutMeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
