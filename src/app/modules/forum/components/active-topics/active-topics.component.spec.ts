import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTopicsComponent } from './active-topics.component';

describe('ActiveTopicsComponent', () => {
  let component: ActiveTopicsComponent;
  let fixture: ComponentFixture<ActiveTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveTopicsComponent]
    });
    fixture = TestBed.createComponent(ActiveTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
