import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionListViewComponent } from './region-list-view.component';

describe('RegionListViewComponent', () => {
  let component: RegionListViewComponent;
  let fixture: ComponentFixture<RegionListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
