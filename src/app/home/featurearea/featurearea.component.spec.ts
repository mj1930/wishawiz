import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureareaComponent } from './featurearea.component';

describe('FeatureareaComponent', () => {
  let component: FeatureareaComponent;
  let fixture: ComponentFixture<FeatureareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
