import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoUseComponent } from './howto-use.component';

describe('HowtoUseComponent', () => {
  let component: HowtoUseComponent;
  let fixture: ComponentFixture<HowtoUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtoUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
