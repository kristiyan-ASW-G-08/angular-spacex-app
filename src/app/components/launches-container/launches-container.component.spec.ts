import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesContainerComponent } from './launches-container.component';

describe('LaunchesContainerComponent', () => {
  let component: LaunchesContainerComponent;
  let fixture: ComponentFixture<LaunchesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
