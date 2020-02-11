import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnibeComponent } from './unibe.component';

describe('UnibeComponent', () => {
  let component: UnibeComponent;
  let fixture: ComponentFixture<UnibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
