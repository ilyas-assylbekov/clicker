import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTrackerComponent } from './image-tracker.component';

describe('ImageTrackerComponent', () => {
  let component: ImageTrackerComponent;
  let fixture: ComponentFixture<ImageTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
