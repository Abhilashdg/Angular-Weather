import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWeidgetMainComponent } from './weather-weidget-main.component';

describe('WeatherWeidgetMainComponent', () => {
  let component: WeatherWeidgetMainComponent;
  let fixture: ComponentFixture<WeatherWeidgetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWeidgetMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWeidgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
