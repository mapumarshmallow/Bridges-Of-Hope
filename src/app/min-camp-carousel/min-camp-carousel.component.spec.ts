import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCampCarouselComponent } from './min-camp-carousel.component';

describe('MinCampCarouselComponent', () => {
  let component: MinCampCarouselComponent;
  let fixture: ComponentFixture<MinCampCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinCampCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinCampCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
