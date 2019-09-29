import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCampHopeComponent } from './min-camp-hope.component';

describe('MinCampHopeComponent', () => {
  let component: MinCampHopeComponent;
  let fixture: ComponentFixture<MinCampHopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinCampHopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinCampHopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
