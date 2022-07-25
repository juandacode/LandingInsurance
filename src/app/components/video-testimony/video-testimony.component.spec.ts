import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTestimonyComponent } from './video-testimony.component';

describe('VideoTestimonyComponent', () => {
  let component: VideoTestimonyComponent;
  let fixture: ComponentFixture<VideoTestimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTestimonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
