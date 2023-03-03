import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content8TeamComponent } from './content8-team.component';

describe('Content8TeamComponent', () => {
  let component: Content8TeamComponent;
  let fixture: ComponentFixture<Content8TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content8TeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content8TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
