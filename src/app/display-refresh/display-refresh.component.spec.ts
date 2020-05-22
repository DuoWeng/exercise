import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRefreshComponent } from './display-refresh.component';

describe('DisplayRefreshComponent', () => {
  let component: DisplayRefreshComponent;
  let fixture: ComponentFixture<DisplayRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
