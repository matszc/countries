import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListViewComponent } from './countries-list-view.component';

describe('CoutriesListViewComponent', () => {
  let component: CountriesListViewComponent;
  let fixture: ComponentFixture<CountriesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
