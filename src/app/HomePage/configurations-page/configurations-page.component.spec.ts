import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsPageComponent } from './configurations-page.component';

describe('ConfigurationsPageComponent', () => {
  let component: ConfigurationsPageComponent;
  let fixture: ComponentFixture<ConfigurationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
