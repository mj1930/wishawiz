import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersTestimonialsComponent } from './providers-testimonials.component';

describe('ProvidersTestimonialsComponent', () => {
  let component: ProvidersTestimonialsComponent;
  let fixture: ComponentFixture<ProvidersTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
