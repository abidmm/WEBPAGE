import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content9ContactComponent } from './content9-contact.component';

describe('Content9ContactComponent', () => {
  let component: Content9ContactComponent;
  let fixture: ComponentFixture<Content9ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content9ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content9ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
