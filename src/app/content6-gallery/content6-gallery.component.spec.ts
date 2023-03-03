import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content6GalleryComponent } from './content6-gallery.component';

describe('Content6GalleryComponent', () => {
  let component: Content6GalleryComponent;
  let fixture: ComponentFixture<Content6GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content6GalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content6GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
