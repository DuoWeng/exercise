import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySentenceComponent } from './display-sentence.component';

describe('DisplaySentenceComponent', () => {
  let component: DisplaySentenceComponent;
  let fixture: ComponentFixture<DisplaySentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
